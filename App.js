import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';

const stackNavigator = createStackNavigator(
  {
  Signup : { screen: SignupScreen, navigationOptions: { headerShown: false } },
  Signin : { screen: SigninScreen, navigationOptions: { headerShown: false } },
  Chat : { screen: ChatScreen },
  Home : { screen: HomeScreen, navigationOptions: { headerShown: false } }
  },
  // {
  //   headerMode: "none"
  // }
);

const App = createAppContainer(stackNavigator);

export default App;