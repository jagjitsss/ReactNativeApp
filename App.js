import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/home/home';
import Menu from './src/pages/restaurants/menu/menu';
import ProductDetail from './src/pages/restaurants/productDetail/productDetail';
import OrderDetail from './src/pages/restaurants/order/order';
import PaymentMethod from './src/pages/payments/payments';
import AddCard from './src/pages/payments/card/addCard';
import Offers from './src/pages/offers/offers';
import SelectLocation from './src/pages/address/selectLocation/selectLocation';
import OrderTracking from './src/pages/restaurants/orderTracking/orderTracking';
import ManageAddress from './src/pages/address/manageAddress/manageAddress';
import SplashScreen from './src/pages/Splash/SplashScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
        component={SplashScreen}
      />
  
 

   <Stack.Screen
     name="Home"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={HomeScreen}
   />


   <Stack.Screen
     name="Restaurant-Menu"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={Menu}
   />

  <Stack.Screen
     name="Product-Detail"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={ProductDetail}
   />  

   <Stack.Screen
     name="Order-Detail"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={OrderDetail}
   />  

   
  <Stack.Screen
     name="Offers"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={Offers}
   />   

   
   <Stack.Screen
     name="Add-Card"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={AddCard}
   />   




   <Stack.Screen
     name="Payments-method"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={PaymentMethod}
   />   


   <Stack.Screen
     name="Select-Location"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={SelectLocation}
   />  

   <Stack.Screen
     name="OrderTracking"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={OrderTracking}
   />  

   <Stack.Screen
     name="ManageAddress"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, }}
     component={ManageAddress}
   />  


  
 </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
