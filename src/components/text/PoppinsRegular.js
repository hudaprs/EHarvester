import React from 'react';
import { Text } from 'react-native';

const PoppinsRegular = ({ children, style }) => {
  return (
    <Text style={[style, { fontFamily: 'Poppins-Regular' }]}>{children}</Text>
  );
};

export default PoppinsRegular;
