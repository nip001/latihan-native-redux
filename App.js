// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Buah from './src/buah/Buah';
// import { Provider } from 'react-redux'
// import store from './src/redux/store';
// import Home from './src/page/Home';


// const Stack = createStackNavigator();

// function App() {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Buah" component={Buah} />
//         <Stack.Screen name="Home" component={Home} />    
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Buah from './src/buah/Buah';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/page/Dashboard';
import Maps from './src/page/Maps';
import Profile from './src/page/Profile';


const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

function Dashboards() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="white"
      barStyle={{ backgroundColor: 'lightcoral' }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarLabel: 'Maps',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-profile-woman" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
   
  );
}

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Buah" component={Buah} />
        <Stack.Screen name="Dashboards" component={Dashboards} />    
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App