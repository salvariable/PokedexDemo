import React from 'react';
import { View, Text, Image } from 'react-native';
import Slider from '@react-native-community/slider';

export default ({ route }) => {
  const { specs } = route.params;
  return (
    <View style={{ alignItems: 'center' }}>
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
          {element.stat.name} :{' '}
          {
            <Slider
              disabled
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={100}
              value={element.base_stat}
              // step={500}
              minimumTrackTintColor="blue"
              maximumTrackTintColor="#000000"
            />
          }
        </Text>
      ))}
    </View>
  );
};
