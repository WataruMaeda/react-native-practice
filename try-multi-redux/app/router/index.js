import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';

export default StackNavigator({
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