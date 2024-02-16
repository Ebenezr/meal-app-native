import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => {
          router.navigate({
            pathname: '/MealDetails/[id]',
            params: {
              id: props.id,
            },
          });
        }}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 12,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '75%',
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '25%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 20,

    width: '100%',
  },
  title: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default MealItem;
