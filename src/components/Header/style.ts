import styled from "styled-components";

export const HeaderDash = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 10rem 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #343b41;

  img {
    width: 9rem;
    height: 1.25rem;
  }

  button {
    width: 4.25rem;
    height: 2.5rem;
    font-weight: 600;
    font-size: 0.75rem;
    color: white;
    background: #212529;
    border: 0.125rem solid #212529;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #868e96;
  }

  @media (max-width: 548px) {
    height: 7rem;
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;
