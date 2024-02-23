import { FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => {
    return <MealItem {...itemData.item} />;
  };
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;
