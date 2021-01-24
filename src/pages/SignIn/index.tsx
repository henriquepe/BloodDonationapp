import React, { useCallback, useRef } from 'react';
import { Alert, Text, ScrollView } from 'react-native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useNavigation } from '@react-navigation/native';
import logoImage from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Logo,
  FormContainer,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  LogoView,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

interface SignInData {
  email: string;
  senha: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInData) => {
    formRef.current?.setErrors({});

    console.log(data);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        senha: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        senha: data.senha,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        'Erro na autenticação',
        'E-mail ou senha inválido | Verifique se foi digitado um e-mail válido',
      );
    }
  }, []);

  return (
    <>
      <Container>
        <LogoView>
          <Logo source={logoImage} />
        </LogoView>

        <FormContainer>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              fontFamily: 'Poppins-Bold',
              paddingTop: 32,
              paddingLeft: 32,
            }}
          >
            Sign
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Bold',
                paddingTop: 32,
                color: '#A10604',
              }}
            >
              in
            </Text>
          </Text>

          <ScrollView>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                placeholderTextColor="#FFEAEA"
                name="email"
                placeholder="Digite seu email"
              />
              <Input
                placeholderTextColor="#FFEAEA"
                name="senha"
                placeholder="Digite sua senha"
              />
              <ForgotPasswordButton>
                <ForgotPasswordButtonText>
                  Esqueceu sua senha?
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>

              <Button
                onPress={() => formRef.current?.submitForm()}
                text="LOGIN"
              />
            </Form>
          </ScrollView>
          <CreateAccountButton>
            <CreateAccountButtonText
              onPress={() => navigation.navigate('SignUp')}
            >
              Não possuo conta
            </CreateAccountButtonText>
          </CreateAccountButton>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;
