import { StackNavigator } from 'react-navigation'
import Home from '../screens/home'
export default StackNavigator({
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