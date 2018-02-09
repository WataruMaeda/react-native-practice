import React from 'react'
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';

import { Provider } from 'react-redux';
import store from '../redux/store';

const Navigation = StackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: `Multiple Counter`,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#34495e', },
          headerTitleStyle: { fontSize: 18, },
        }),
      },
})

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)