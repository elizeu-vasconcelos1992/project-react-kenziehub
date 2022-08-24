import styled from "styled-components";

export const FormUpdate = styled.form`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem 0 1rem;
  color: #f8f9fa;
  gap: 1.2rem;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;

    input {
      width: inherit;
      height: 3rem;
      padding: 1rem;
      margin-top: 1rem;
      font-size: 1rem;
      letter-spacing: 0.08rem;
      background-color: #343b41;
      border: 0.063rem solid #343b41;
      border-radius: 0.25rem;
      color: white;
      outline: none;
    }

    p {
      margin-top: 0.3rem;
      font-size: 0.75rem;
      color: #cd3333;
    }

    select {
      width: inherit;
      height: 3rem;
      padding: 0 1rem 0 1rem;
      margin-top: 1rem;
      font-size: 1rem;
      letter-spacing: 0.08rem;
      background-color: #343b41;
      border: 0.063rem solid #343b41;
      border-radius: 0.25rem;
      color: white;
      outline: none;
    }
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      width: 60%;
      height: 3rem;
      font-size: 1rem;
      font-weight: 500;
      background-color: #59323f;
      border: 0.063rem solid #59323f;
      border-radius: 0.25rem;
      cursor: pointer;
      color: white;
      transition: 0.3s;
    }

    button:hover {
      background-color: #ff427f;
    }

    .delete {
      width: 30%;
      height: 3rem;
      font-size: 1rem;
      font-weight: 500;
      background-color: #868e96;
      border: 0.063rem solid #868e96;
      border-radius: 0.25rem;
      cursor: pointer;
      color: white;
      transition: 0.3s;
    }
  }

  @media (max-width: 548px) {
    label {
      input {
        height: 2rem;
        margin-top: 0.5rem;
      }

      select {
        height: 2rem;
        margin-top: 0.5rem;
      }
    }

    button {
      height: 2rem;
    }
  }
`;
