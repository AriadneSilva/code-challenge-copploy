import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";

import { UsersData } from "../types/users";
import { api } from "../service/api";

interface UsersContextData {
  dataUser: UsersData[];
  getDataUsers: () => Promise<void>;
  useIsMobile: () => boolean;
  isLoading: boolean;
}

interface UsersProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);
export const UserProvider = ({ children }: UsersProviderProps) => {
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState<UsersData[]>([]);

  async function getDataUsers() {
    try {
      setLoading(true);
      const response = await api.get("");
      const data = response.data;

      console.log("meu data", data);

      if (Array.isArray(data)) {
        setDataUser(data);
        setLoading(false);
      } else {
        setDataUser([]); // caso não venha como array
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setLoading(false);
    }
  }

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  }

  // //USE EFFECT HOOKS
  useEffect(() => {
    const hydrate = async () => {
      try {
        getDataUsers();
      } catch (e) {
        console.log("Erro ao carregar os usuarios");
      }
    };
    hydrate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UsersContext.Provider
      value={{
        dataUser,
        getDataUsers,
        useIsMobile,
        isLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = (): UsersContextData => {
  return useContext(UsersContext);
};
