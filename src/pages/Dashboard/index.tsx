import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={signOut}>
        <Text style={{ fontSize: 50, color: '#000' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
