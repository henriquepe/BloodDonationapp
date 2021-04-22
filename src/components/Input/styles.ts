import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isAgrouped: boolean;
}

export const Container = styled.View<ContainerProps>`
  background-color: rgba(200, 200, 200, 0.3);
  margin: 24px 32px 0 32px;
  align-self: center;
  justify-content: center;
  width: 350px;
  height: 70px;
  border-radius: 5px;
`;

export const InputComponent = styled.TextInput`
  width: 100%;

  padding-left: 17px;
  font-size: 14px;
  color: #000;

  text-align: justify;
`;
