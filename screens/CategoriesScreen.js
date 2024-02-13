import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate('Meals OverView', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  categotyWrapper: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
