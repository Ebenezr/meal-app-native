import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/data';
import MealItem from '../components/MealItem';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import { useLayoutEffect } from 'react';

const Meals = () => {
  const navigation = useNavigation();
  const { catId } = useLocalSearchParams();
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = (itemData) => {
    return <MealItem {...itemData.item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle ? categoryTitle : 'Meals',
    });
  }, [navigation, catId]);

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

export default Meals;
