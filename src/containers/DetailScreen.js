import React from 'react';
import { View, Text, Image } from 'react-native';

export default ({ route }) => {
  const { specs } = route.params;
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 200 }}
        source={{
          uri: specs.sprites.front_default,
        }}
      />
      <Text>#{specs.id}</Text>
      <Text>{specs.name}</Text>
      <Text>Height: {specs.height / 10}m</Text>
      <Text>Weight: {specs.weight / 10}kg</Text>
      {specs.stats.map((element) => (
        <Text>
          {element.stat.name} : {element.base_stat}
        </Text>
      ))}
    </View>
  );
};
