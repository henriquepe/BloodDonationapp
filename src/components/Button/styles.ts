import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const LoginButtonText = styled.Text`
  color: #fbfafa;
`;

export const Container = styled(RectButton)`
  background-color: #a10605;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 24px 32px 0 32px;
  border-radius: 5px;
`;
