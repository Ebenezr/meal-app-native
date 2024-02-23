import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealList';
import { useContext } from 'react';
import { FavoriteContext } from '../store/favorite-context';
import { MEALS } from '../data/data';

const Favorites = () => {
  const favorites = useContext(FavoriteContext);

  const displayedMeals = MEALS.filter((meal) =>
    favorites.favorites.includes(meal.id)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.rootText}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>Favorite Meals </Text>
      <MealsList items={displayedMeals} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rootText: {
    fontSize: 20,
  },
});
