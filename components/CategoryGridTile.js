import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          { ...styles.container, ...{ backgroundColor: props.color } },
          pressed ? styles.buttonPress : null,
        ]}
        onPress={props.onPress}
        android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  title: {
    // fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
  },
  buttonPress: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export default CategoryGridTile;
