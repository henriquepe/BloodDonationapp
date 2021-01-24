import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import { LoginButtonText, Container } from './styles';

interface ButtonComponentProps extends RectButtonProperties {
  text: string;
}

const Button: React.FC<ButtonComponentProps> = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      <LoginButtonText>{text}</LoginButtonText>
    </Container>
  );
};

export default Button;
