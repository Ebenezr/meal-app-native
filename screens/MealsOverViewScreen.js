import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/data';
import MealItem from '../components/MealItem';

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = (itemData) => {
    return <MealItem {...itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <Text>Meals OverView Screen</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MealsOverViewScreen;
