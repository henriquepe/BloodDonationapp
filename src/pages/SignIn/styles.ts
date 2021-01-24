import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  flex: 1;
  flex-direction: column;
`;

export const LogoView = styled.View`
  height: 35%;
  align-items: center;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 50px;
`;

export const FormContainer = styled.View.attrs({
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
})`
  background-color: #d51c1b;

  flex: 1;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  padding: 14px 32px;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-size: 14px;
  color: #fbfafa;
  text-align: right;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  flex: 1;
  margin: 32px auto;
`;

export const CreateAccountButtonText = styled.Text`
  font-family: 'Poppins-Bold';

  color: #fbfafa;
`;
