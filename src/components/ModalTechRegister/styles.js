import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .div-container {
    width: 23.125rem;
    height: 21.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #212529;
    border-radius: 0.25rem;
    box-shadow: 0px 0.25rem 2.5rem 0.625rem rgba(0, 0, 0, 0.25);
    animation: scale-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    .div-header {
      width: 100%;
      height: 15%;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem 0 1rem;
      align-items: center;
      background-color: #343b41;

      span {
        font-weight: 700;
        font-size: 0.875rem;
        color: #f8f9fa;
      }

      svg {
        cursor: pointer;
      }
    }

    @media (max-width: 548px) {
      width: 18.125rem;
      height: 16.375rem;
    }
  }
`;
