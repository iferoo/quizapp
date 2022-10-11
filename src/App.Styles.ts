import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color: rgb(226 232 240);
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    box-sizing: border-box;
    font-family: 'Catamaran', 'Fascinate', sans-serif, cursive;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: black;
  }
  .score {
    color: red;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: #0085a3;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    padding: 10px 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    p {
      font-size: 1rem;
    }
  }
`;
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'green'
        : !correct && userClicked
        ? 'red'
        : 'black'};

    border: 3px solid transparent;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
