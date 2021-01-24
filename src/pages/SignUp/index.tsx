import React, { useCallback, useRef } from 'react';
import { Text, View, Alert, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/mobile';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  FormContainer,
  Icon,
  SignOutContainer,
  RedView,
  SignOutInputOne,
  SignOutInputTwo,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface SignUpData {
  email: string;
  senha: string;
  cidade: string;
  estado: string;
  typeOfBlood: string;
  idade: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignUpData) => {
    formRef.current?.setErrors({});

    console.log(data);

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        senha: Yup.string().required('Senha obrigatória'),
        nome: Yup.string().required('Nome obrigatório'),
        cidade: Yup.string().required('Cidade obrigatória'),
        estado: Yup.string().required('Estado obrigatório'),
        idade: Yup.string().required('Idade obrigatória'),
        typeOfBlood: Yup.string().required('Tipo de sangue obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);

      navigation.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        'Erro no cadastro',
        'Alguma informação faltando, por favor dê uma revisada.',
      );
    }
  }, []);

  return (
    <>
      <Container>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <RedView />
          <SignOutContainer onPress={() => navigation.navigate('SignIn')}>
            <Icon name="arrow-left" size={30} />
            <Text
              style={{
                color: '#D51C1A',
                fontSize: 32,
                fontFamily: 'Poppins-Bold',
                paddingTop: 32,
                paddingLeft: 16,
              }}
            >
              Sign
              <View style={{ paddingRight: 10 }}>
                <Text />
              </View>
              <Text
                style={{
                  fontSize: 32,
                  fontFamily: 'Poppins-Bold',
                  paddingTop: 32,
                  color: '#A10604',
                }}
              >
                out
              </Text>
            </Text>
          </SignOutContainer>
          <ScrollView>
            <Input
              placeholderTextColor="#C4C4C4"
              name="nome"
              placeholder="Digite seu nome"
            />
            <Input
              placeholderTextColor="#C4C4C4"
              name="senha"
              placeholder="Digite sua senha"
            />

            <Input
              placeholderTextColor="#C4C4C4"
              name="email"
              placeholder="Digite seu email"
            />

            <Input
              name="cidade"
              placeholderTextColor="#C4C4C4"
              placeholder="Digite sua cidade"
              style={{ color: '#000' }}
            />
            <Input
              name="estado"
              placeholderTextColor="#C4C4C4"
              placeholder="UF"
              style={{ color: '#000' }}
            />

            <Input
              placeholderTextColor="#C4C4C4"
              name="typeOfBlood"
              placeholder="Tipo sanguíneo"
            />
            <Input
              placeholderTextColor="#C4C4C4"
              name="idade"
              placeholder="Idade"
            />

            <Button
              text="CADASTRAR"
              onPress={() => formRef.current?.submitForm()}
            />
          </ScrollView>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp;
