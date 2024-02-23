import { Image, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { MEALS } from '../../data/data';
import { useLayoutEffect } from 'react';
import IconButton from '../../components/IconButton';
import { FavoriteContext } from '../../store/favorite-context';
import { useContext } from 'react';

const MealDetail = () => {
  const favoriteMealContext = useContext(FavoriteContext);
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const mealIsFavorite = favoriteMealContext.favorites.includes(id);

  const toggleFavoriteHandler = () => {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(id);
    } else {
      favoriteMealContext.addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'favorite' : 'favorite-outline'}
          onPress={toggleFavoriteHandler}
          color='white'
          style={{ marginRight: 10 }}
        />
      ),
    });
  }, [navigation, selectedMeal, mealIsFavorite, toggleFavoriteHandler]);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.bgImage} />
      <View style={styles.details}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <Text style={styles.duration}>{selectedMeal.duration}m</Text>
        <Text style={styles.complexity}>
          {selectedMeal.complexity?.toUpperCase()}
        </Text>
        <Text style={styles.affordability}>
          {selectedMeal.affordability?.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.header}>Ingredients:</Text>
      <Text style={styles.text}>{selectedMeal.ingredients}</Text>
      <Text style={styles.header}>Steps:</Text>
      <Text style={styles.text}>{selectedMeal.steps}</Text>
    </View>
  );
};
export default MealDetail;

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  details: {
    margin: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  duration: {
    fontSize: 16,
    color: '#ffd700',
    marginBottom: 5,
  },
  complexity: {
    fontSize: 16,
    color: '#ff6347',
    marginBottom: 5,
  },
  affordability: {
    fontSize: 16,
    color: '#32cd32',
    marginBottom: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
});
