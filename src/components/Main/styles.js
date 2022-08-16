import styled from "styled-components";

export const MainDash = styled.div`
  width: 100%;
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
    height: 7rem;
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
    height: 100%;
    padding: 0rem 10rem 0 10rem;
    display: flex;
    flex-direction: column;

    .div-techs {
      width: inherit;
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        font-weight: 600;
        font-size: 1rem;
      }

      button {
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        cursor: pointer;
        color: white;
        border-radius: 0.25rem;
        background-color: #212529;
        border: 0.125rem solid #212529;
      }
    }

    ul {
      width: inherit;
      padding: 1.5rem 0 1.5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background-color: #212529;
      gap: 1.5rem;

      li {
        width: 95%;
        height: 3.125rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem 0 1rem;
        border-radius: 0.25rem;
        background-color: #121214;
        transition: 0.5s;

        @keyframes scale-in {
          0% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1);
          }
        }

        animation: scale-in 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        p {
          font-weight: 700;
          font-size: 1rem;
        }

        div {
          display: flex;
          align-items: center;
          gap: 1.5rem;

          span {
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            color: #868e96;
          }

          svg {
            cursor: pointer;
          }
        }
      }

      li:hover {
        background-color: #343b41;
      }
    }
  }

  @media (max-width: 720px) {
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
    }
  }
`;
