import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default ({ name, navigation }) => {
  const [specs, setSpecs] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((json) => {
        setSpecs(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          specs,
        })
      }
    >
      <View style={{ backgroundColor: 'white', margin: 8 }}>
        {specs && (
          <Image
            resizeMode="contain"
            style={{ height: 120, width: 120 }}
            source={{
              uri: specs.sprites.front_default,
            }}
          />
        )}
        <Text style={{ textTransform: 'capitalize', alignSelf: 'center' }}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
