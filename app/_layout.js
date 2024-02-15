import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      initialRouteName='Home'
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
      <Stack.Screen
        name='Home'
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name='Categories'
        options={{
          title: 'Meal Categories',
        }}
      />
      <Stack.Screen
        name='Meals'
        options={{
          title: 'Meals OverView',
        }}
      />
    </Stack>
  );
};

export default Layout;