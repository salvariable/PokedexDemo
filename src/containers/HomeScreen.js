import React, { useEffect, useState, Fragment } from 'react';
import { View, Text } from 'react-native';
import PokemonGrid from '../components/PokemonGrid';
import { TextInput } from 'react-native-gesture-handler';

export default ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
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

  const data = searchResults.length ? searchResults : pokemons;

  return (
    <View>
      {pokemons ? (
        <Fragment>
          <TextInput
            autoCorrect={false}
            style={{ margin: 16 }}
            onChangeText={(input) => {
              const filtered = pokemons.filter((pokemon) =>
                pokemon.name.includes(input.toLowerCase())
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
