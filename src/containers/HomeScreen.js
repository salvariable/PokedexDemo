import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>You are in Home Screen now</Text>
      </TouchableOpacity>
    </View>
  );
};
