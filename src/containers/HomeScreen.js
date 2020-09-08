import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import PokemonTile from '../components/PokemonTile';

export default ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {pokemons ? (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => <PokemonTile name={item.name} navigation={navigation} />}
          contentContainerStyle={{ backgroundColor: 'silver' }}
          numColumns={3}
        />
      ) : (
        <Text>No pokemons yet, loading...</Text>
      )}
    </View>
  );
};
