import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';

const Rooter = StackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
          title: `Multiple Counter`,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#34495e', },
          headerTitleStyle: { fontSize: 18, },
        }),
      },
});

export default Rooter;