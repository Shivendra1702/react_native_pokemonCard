import {StyleSheet, Platform, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const CharmanderData = {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };
  const SquirtleData = {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };
  const BulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };
  const PikachuData = {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'), // Replace with the actual image path
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };

  // const pokemons = [
  //   {
  //     name: 'Charmander',
  //     image: require('./assets/charmander.png'),
  //     type: 'Fire',
  //     hp: 39,
  //     moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
  //     weaknesses: ['Water', 'Rock'],
  //   },
  //   {
  //     name: 'Squirtle',
  //     image: require('./assets/squirtle.png'), // Replace with the actual image path
  //     type: 'Water',
  //     hp: 44,
  //     moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
  //     weaknesses: ['Electric', 'Grass'],
  //   },
  //   {
  //     name: 'Bulbasaur',
  //     image: require('./assets/bulbasaur.png'), // Replace with the actual image path
  //     type: 'Grass',
  //     hp: 45,
  //     moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
  //     weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  //   },
  //   {
  //     name: 'Pikachu',
  //     image: require('./assets/pikachu.png'), // Replace with the actual image path
  //     type: 'Electric',
  //     hp: 35,
  //     moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
  //     weaknesses: ['Ground'],
  //   },
  // ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* {pokemons.map((pokemon, index) => (
          <PokemonCard {...pokemon} key={index} />
        ))} */}
        <PokemonCard {...CharmanderData} />
        <PokemonCard {...SquirtleData} />
        <PokemonCard {...BulbasaurData} />
        <PokemonCard {...PikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
