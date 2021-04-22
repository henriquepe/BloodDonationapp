import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import Input from '../../components/Input';

interface OtherInputsProps {
  name: string;
}

export const Container = styled.View`
  background-color: #d51c1b;
  flex: 1;
`;

export const RedView = styled.View`
  background-color: #d51c1b;
  height: 10%;
`;

export const FormContainer = styled(Form)`
  background-color: #ffffff;
  flex: 1;
  padding-bottom: 20px;
`;

export const Icon = styled(FeatherIcon)`
  padding-top: 30px;
  padding-left: 32px;
`;

export const SignOutContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SignOutInputOne = styled.TextInput<OtherInputsProps>`
  background-color: rgba(200, 200, 200, 0.3);
  margin-left: 32px;
  margin-top: 24px;
  align-self: center;
  justify-content: center;
  width: 210px;
  height: 70px;
  border-radius: 5px;
  padding-left: 17px;
  color: #000;
  color: #ffeaea;
  font-size: 14px;

  text-align: justify;
`;

export const SignOutInputTwo = styled.TextInput<OtherInputsProps>`
  background-color: rgba(200, 200, 200, 0.3);
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 24px;
  align-self: center;
  justify-content: center;
  width: 107px;
  height: 70px;
  border-radius: 5px;
  padding-left: 17px;
  color: #000;

  color: #ffeaea;
  font-size: 14px;

  text-align: justify;
`;
