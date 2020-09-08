import React from 'react';
import { FlatList } from 'react-native';
import PokemonTile from './PokemonTile';

export default ({ pokemons, navigation }) => {
  return (
    <FlatList
      data={pokemons}
      extraData={pokemons}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => <PokemonTile name={item.name} navigation={navigation} />}
      contentContainerStyle={{ backgroundColor: 'silver' }}
      numColumns={3}
    />
  );
};
