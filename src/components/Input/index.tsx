import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';

import { Container, InputComponent } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  placeholder?: string;
  isAgrouped?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  isAgrouped,
  name,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isAgrouped={!!isAgrouped}>
      <InputComponent
        ref={inputElementRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
