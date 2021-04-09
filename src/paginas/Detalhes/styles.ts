import styled from 'styled-components';

export const EstiloDetalhes = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  h1 {
    margin: 24px 0;
  }

  div {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    border: 2px solid #fff;
    width: 1000px;
    padding: 16px;

    article {
      width: 400px;
      border: 2px solid #b55400;
      padding: 8px;
      margin: 8px;
    }

    a {
      position: absolute;
      left: 8px;
      top: 8px;

      svg {
        margin-left: 8px;
        color: #fff;
      }
    }
  }
`;
