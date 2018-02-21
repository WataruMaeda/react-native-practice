import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import Home from '../screens/home'

const navigator = StackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: `News Feeds`,
            headerTintColor: "#fff",
            headerStyle: { backgroundColor: '#34495e', },
            headerTitleStyle: { fontSize: 18, },
          }),
  
    },
})

export default TabNavigator({
    Tab: { 
        screen:  navigator,
        navigationOptions: {
            tabBarIcon: <Icon name='ios-contact' />,
            activeTintColor: 'red'
        }
          
        },
})