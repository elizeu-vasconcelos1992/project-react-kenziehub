import styled from "styled-components";

export const Container = styled.div`
  width: 23.063rem;
  min-height: 60.688rem;
  font-family: "Inter";
  margin: 1rem 0 1rem 0;
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

  .div-header {
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button-previous {
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

    .button-previous:hover {
      background-color: #868e96;
    }
  }

  .div-form {
    width: inherit;
    height: inherit;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;
    gap: 1.5rem;

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 0.75rem;
      color: #868e96;
    }
  }

  @media (max-width: 385px) {
    width: 18rem;

    .div-form {
      width: 100%;
    }
  }
`;
