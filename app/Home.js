import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Link href='/Categories' asChild>
        <Pressable style={styles.button}>
          <Text> Go to Categories</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});
