import styled from "styled-components";

export const MainDash = styled.div`
  width: 100%;
  height: 90%;
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
  }

  .div-user {
    width: 100%;
    height: 20%;
    padding: 0 10rem 0 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #343b41;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      color: #868e96;
    }
  }

  .div-contend {
    width: 100%;
    height: 80%;
    padding: 2rem 10rem 0 10rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  @media (max-width: 720px) {
    h3 {
      width: 100%;
      text-align: center;
      margin-top: 1rem;
    }
    .div-user {
      padding: 0;
      flex-direction: column;
      justify-content: space-around;

      p {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .div-contend {
      padding: 0;

      h4 {
        text-align: center;
      }
    }
  }
`;
