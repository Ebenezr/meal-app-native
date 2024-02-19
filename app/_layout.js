import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Drawer
      initialRouteName='index'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#c1c1c1',
        },
      }}
    >
      <Drawer.Screen
        name='index'
        options={{
          title: 'Home',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Categories'
        options={{
          title: 'Meal Categories',
          drawerIcons: ({ size, color }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Meals'
        options={{
          title: 'Meals OverView',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='restaurant' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='MealDetails/[id]'
        options={{
          title: 'Meal Details',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='restaurant' size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        options={{
          title: 'Your Favorites',
          drawerIcon: ({ size, color }) => (
            <Ionicons name='star' size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;
