/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React from 'react';

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const getTypeDetails = type => {
    switch (type.toLowerCase()) {
      case 'electric':
        return {borderColor: '#FFD700', emoji: '⚡️'};
      case 'water':
        return {borderColor: '#6493EA', emoji: '💧'};
      case 'fire':
        return {borderColor: '#FF5733', emoji: '🔥'};
      case 'grass':
        return {borderColor: '#66CC66', emoji: '🌿'};
      default:
        return {borderColor: '#A0A0A0', emoji: '❓'};
    }
  };
  const {borderColor, emoji} = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.pName}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image style={styles.cardImage} resizeMode="contain" source={image} />
      <View style={styles.typeContainer}>
        <View
          style={[
            styles.typeBadge,
            {
              borderColor: borderColor,
            },
          ]}>
          <Text>{emoji}</Text>
          <Text
            style={[
              styles.typeText,
              {
                color: borderColor,
              },
            ]}>
            {type}
          </Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves : {moves.join(', ')}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weaknesses : {weaknesses.join(', ')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardText: {
    fontSize: 20,
  },
  nameContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pName: {
    fontWeight: 'bold',
    color: '#313131',
    fontSize: 30,
  },
  hp: {
    color: '#313131',
    fontSize: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  typeBadge: {
    borderWidth: 4,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  typeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 20,
  },
  movesText: {
    fontSize: 20,
    color: '#313131',
    fontWeight: 'bold',
  },
  weaknessContainer: {},
  weaknessText: {
    fontSize: 20,
    color: '#313131',
    fontWeight: 'bold',
  },
});
