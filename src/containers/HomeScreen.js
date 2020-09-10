import React, { useEffect, useState, Fragment } from 'react';
import { View, Text } from 'react-native';
import PokemonGrid from '../components/PokemonGrid';
import { Searchbar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default ({ navigation }) => {
  const [pokemons, setPokemons] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const getCacheData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('POKEMON_CACHE');
        const names = jsonValue != null ? JSON.parse(jsonValue) : null;
        return setPokemons(names);
      } catch (error) {
        console.log('Error getting data: ', error);
      }
    };

    getCacheData();

    if (!pokemons) {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
        .then((response) => response.json())
        .then(async (json) => {
          setPokemons(json.results);
          await AsyncStorage.setItem('POKEMON_NAMES', JSON.stringify(json.results));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [pokemons]);

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
