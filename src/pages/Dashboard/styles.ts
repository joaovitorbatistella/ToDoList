import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Div = styled.div``;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 900px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    & + input {
      margin-left: 16px;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Show = styled.div`
  margin-top: 80px;
  max-width: 700px;

  div {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + div {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50px;
    }

    svg {
      margin-left: auto;
      color: red;
    }
  }
`;

export const Button = styled.button`
  margin-left: auto;
  color: red;
  background-color: transparent;
  border: none;
`;
