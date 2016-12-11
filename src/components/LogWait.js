import React from 'react';
import { View } from 'react-native';
import { Spinner } from './common';

const LogWait = () => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Spinner />
    </View>
  );
};

export default LogWait;
