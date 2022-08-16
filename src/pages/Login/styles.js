import styled from "styled-components";

export const Container = styled.div`
  width: 23.063rem;
  height: 34.875rem;
  font-family: "Inter";
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: white;

  img {
    width: 9rem;
    height: 1.25rem;
  }

  div {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      color: #868e96;
    }

    .button-register {
      width: 20.625rem;
      height: 3rem;
      font-size: 1rem;
      font-weight: 500;
      background: #868e96;
      border: 0.063rem solid #868e96;
      border-radius: 0.25rem;
      cursor: pointer;
      color: white;
      transition: 0.3s;
    }
    .button-register:hover {
      background-color: #343b41;
    }
  }

  @media (max-width: 385px) {
    width: 20rem;

    div {
      width: 90%;

      .button-register {
        width: 90%;
      }
    }
  }
`;
