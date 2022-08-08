import styled from "styled-components";

export const Form = styled.form`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  label {
    width: 20.625rem;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 400;

    input {
      width: inherit;
      height: 3rem;
      padding: 1rem;
      font-size: 1rem;
      letter-spacing: 0.08rem;
      margin-top: 1.375rem;
      background: #343b41;
      border: 0.063rem solid #f8f9fa;
      border-radius: 0.25rem;
      color: white;
      outline: none;
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      color: #cd3333;
    }
  }

  button {
    width: 20.625rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 500;
    background: #ff577f;
    border: 0.063rem solid #ff577f;
    border-radius: 0.25rem;
    cursor: pointer;
    color: white;
    transition: 0.3s;
  }

  button:hover {
    background-color: #ff427f;
  }

  @media (max-width: 385px) {
    width: 90%;

    label {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;
