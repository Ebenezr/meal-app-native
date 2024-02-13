import { StyleSheet, Text, View } from 'react-native';

const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;

  return (
    <View style={styles.screen}>
      <Text>Meals OverView Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsOverViewScreen;
