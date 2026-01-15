import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  padding: 1rem;
  margin: 0rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);

  flex-direction: row;
  gap: 0.75rem;
  transition: all 0.3s ease-in-out;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const Info = styled.div`
  align-items: space-between;
  justify-content: center;
  display: contents;
`;

export const Details = styled.div`
  p {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  font-size: 0.875rem;
  color: #444;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const Label = styled.span`
  font-size: 12px;
  color: gray;
`;

export const Value = styled.span`
  font-size: 16px;
  color: blue;
`;
