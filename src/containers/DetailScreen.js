import React from 'react';
import { View, Text, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import Slider from '@react-native-community/slider';

export default ({ route }) => {
  const { specs } = route.params;
  const { name, id, sprites, height, weight, stats } = specs;

  const capitalize = (str) => {
    if (typeof str === 'string') {
      return str.replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return '';
    }
  };

  return (
    <View style={{ backgroundColor: 'white', margin: 16, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          resizeMode="contain"
          style={{ height: 150, width: 150 }}
          source={{
            uri: sprites.front_default,
          }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'gray' }}>#{id}</Text>
          <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 32 }}>
            {capitalize(name)}
          </Text>
          <Text>Height: {height / 10}m</Text>
          <Text>Weight: {weight / 10}kg</Text>
        </View>
      </View>

      <Divider />

      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: 'gray',
        }}
      >
        STATISTICS
      </Text>

      {stats.map((element) => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              width: 80,
              alignSelf: 'center',
              marginRight: 16,
              fontWeight: 'bold',
              color: 'gray',
            }}
          >
            {capitalize(element.stat.name)}
          </Text>
          <Slider
            disabled
            style={{ width: 200, height: 40, justifyContent: 'center' }}
            minimumValue={0}
            maximumValue={100}
            value={element.base_stat}
            step={element.base_stat}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="#000000"
          />
          <Text style={{ fontWeight: 'bold', marginLeft: 8 }}>{element.base_stat}</Text>
        </View>
      ))}
    </View>
  );
};
