import { Pressable, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({ icon, onPress, color, size = 24 }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => pressed && styles.pressed}
  >
    <MaterialIcons name={icon} size={size} color={color} />
  </Pressable>
);

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
