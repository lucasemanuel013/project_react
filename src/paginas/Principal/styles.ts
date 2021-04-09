import styled from 'styled-components';

export const EstiloPrincipal = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
    min-height: 400px;
    background: #eeeeee;
    border-radius: 8px;

    h1 {
      margin: 32px 0;
    }

    div {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 18px;
      }

      input {
        width: 80%;
        padding: 4px;
      }
    }

    button {
      width: 80%;
      padding: 8px;
      background: #b55400;
      margin-top: 24px;
      border-radius: 4px;
      font-weight: bold;
    }

    button + button {
      margin: 8px 0;
    }
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-top: 16px;
    text-decoration: none;

    svg {
      margin-left: 8px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h6 {
      margin-top: 64px;
    }

    h6 + h6 {
      margin-left: 24px;
    }
  }
`;
