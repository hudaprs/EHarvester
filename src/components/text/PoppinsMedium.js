import React from 'react';
import { Text } from 'react-native';

const PoppinsMedium = ({ children, style }) => {
  return (
    <Text style={[style, { fontFamily: 'Poppins-Medium' }]}>{children}</Text>
  );
};

export default PoppinsMedium;
