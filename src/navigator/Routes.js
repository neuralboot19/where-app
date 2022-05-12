import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import BookingsIndex from '../components/BookingsIndex';
import PromotionsIndex from '../components/PromotionsIndex';
import CategoryIndex from '../components/CategoryIndex';
import CommerceShow from '../components/CommerceShow';
import Payment from '../components/Payment';
import Setting from '../components/Setting';

const Stack = createStackNavigator();

export default class Navigator extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={this.props.isLogin ? "Dashboard" : "Home"} >
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
          <Stack.Screen name="BookingsIndex" options={{ headerShown: false }} component={BookingsIndex} />
          <Stack.Screen name="PromotionsIndex" options={{ headerShown: false }} component={PromotionsIndex} />
          <Stack.Screen name="CategoryIndex" options={{ headerShown: false }} component={CategoryIndex} />
          <Stack.Screen name="CommerceShow" options={{ headerShown: false }} component={CommerceShow} />
          <Stack.Screen name="Payment" options={{ headerShown: false }} component={Payment} />
          <Stack.Screen name="Setting" options={{ headerShown: false }} component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}