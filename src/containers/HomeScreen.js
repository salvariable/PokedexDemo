import React, { useEffect, useState, Fragment } from 'react';
import { View, Text } from 'react-native';
import PokemonGrid from '../components/PokemonGrid';
import { TextInput } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

export default ({ navigation }) => {
  const [pokemons, setPokemons] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

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

  const data = searchResults ? searchResults : pokemons;

  return (
    <View>
      {pokemons ? (
        <Fragment>
          <Searchbar
            autoCorrect={false}
            style={{ margin: 16 }}
            placeholder="Search by name or ID"
            onChangeText={(input) => {
              const filtered = pokemons.filter(
                (pokemon) =>
                  pokemon.name.includes(input.toLowerCase()) || pokemon.url.includes(input)
              );
              setSearchResults(filtered);
            }}
          />
          <PokemonGrid pokemons={data} navigation={navigation} />
        </Fragment>
      ) : (
        <Text>No pokemons yet, loading...</Text>
      )}
    </View>
  );
};
