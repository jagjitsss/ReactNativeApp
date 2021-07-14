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
import EditPayments from './src/pages/payments/editPayments/editPayments';
import AddCard from './src/pages/payments/card/addCard';
import Offers from './src/pages/offers/offers';
import SelectLocation from './src/pages/address/selectLocation/selectLocation';
import OrderTracking from './src/pages/restaurants/orderTracking/orderTracking';
import ManageAddress from './src/pages/address/manageAddress/manageAddress';
import SplashScreen from './src/pages/Splash/SplashScreen';
import login from './src/pages/auth/login/login';
import OTP from './src/pages/auth/otp/otp';
import SignIn from './src/pages/auth/signIn/signIn';
import SignUp from './src/pages/auth/signUp/signUp';
import ForgotPassword from './src/pages/auth/forgot/forgot';
import ResetPassword from './src/pages/auth/resetPassword/resetPassword';
import Favourites from './src/pages/favourites/favourites';
import SearchPage from './src/pages/search/search';
import SearchPage1 from './src/pages/search/search-v1';

import UserMenu from './src/pages/user/menu/menu';
import EditProfile from './src/pages/user/editProfile/editProfile';
import RestaurantMenu1 from './src/pages/restaurants/menu/v/menu-v1/menu-v1';
import RestaurantMenu2 from './src/pages/restaurants/menu/v/menu-v2/menu-v2';
import RestaurantMenu3 from './src/pages/restaurants/menu/v/menu-v3/menu-v3';
import UserMenuV2 from './src/pages/user/menu-v2/menu-v2';
import UserOrders from './src/pages/user/orders/orders';
import OffersPromo from './src/pages/offers/offer-v1/offer-v1';
import recentSearchPage from './src/pages/search/recent_search';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import
FontAwesome
from 'react-native-vector-icons/FontAwesome';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
        component={SplashScreen}
      />

    <Stack.Screen
      name="OTP"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false, showLabel: false, showLabel: false}}
      component={OTP}
    />

    <Stack.Screen
      name="login"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false, showLabel: false}}
      component={login}
    />

   <Stack.Screen
      name="SignIn"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={SignIn}
    />

   <Stack.Screen
      name="SignUp"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={SignUp}
    />

    <Stack.Screen
      name="ForgotPassword"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={ForgotPassword}
    />

   <Stack.Screen
      name="ResetPassword"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={ResetPassword}
    />
    <Stack.Screen
      name="Favourites"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={Favourites}
    />

    <Stack.Screen
      name="EditPayments"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
      component={EditPayments}
    />
    
  
   <Stack.Screen
     name="Restaurant-Menu"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
     component={Menu}
   />

  <Stack.Screen
     name="Product-Detail"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' }, tabBarVisible: false}}
     component={ProductDetail}
   />  

  
   
  <Stack.Screen
     name="Offers"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={Offers}
   />   

   
   <Stack.Screen
     name="Add-Card"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={AddCard}
   />   

<Stack.Screen
     name="Home"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={HomeScreen}
   />   



   <Stack.Screen
     name="Payments-method"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={PaymentMethod}
   />   


   <Stack.Screen
     name="Select-Location"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={SelectLocation}
   />  

   <Stack.Screen
     name="OrderTracking"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={OrderTracking}
   />  

   <Stack.Screen
     name="ManageAddress"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={ManageAddress}
   />  

   <Stack.Screen
     name="EditProfile"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={EditProfile}
   /> 

   <Stack.Screen
     name="SearchPage1"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={SearchPage1}
   />  

   <Stack.Screen
     name="RestaurantMenu1"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={RestaurantMenu1}
   />  

   <Stack.Screen
     name="RestaurantMenu2"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={RestaurantMenu2}
   /> 
   <Stack.Screen
     name="RestaurantMenu3"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={RestaurantMenu3}
   />  
   <Stack.Screen
     name="UserMenuV2"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={UserMenuV2}
   />  

  <Stack.Screen
     name="UserOrders"
     options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
     component={UserOrders}
   />  

  <Stack.Screen
      name="OffersPromo"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
      component={OffersPromo}
    />  


  <Stack.Screen
      name="recentSearchPage"
      options={{ headerShown: false, cardStyle: { backgroundColor: '#FFFFFF' },  tabBarVisible: false,}}
      component={recentSearchPage}
    />  







    </Stack.Navigator>

    
  );
}

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      unmountInactiveScreens={true}
     initialRouteName="Home"

     
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let tabBarVisible = false;

        if(route.name === 'SplashScreen'){
          route.navigate('Home')
        }

        if (route.name === 'Home') {
          tabBarVisible = true
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
       return {
          tabBarVisible:tabBarVisible,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        };
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FFCC66',
      showLabel:false,
      
    }}

    >
      <Tab.Screen name="HomeStack" component={HomeStack}  
        options={({ navigation }) => {
        const { routes, index } = navigation.dangerouslyGetState();
        const { state: exploreState } = routes[index];
       
        let tabBarVisible = false;
        if (exploreState) {
          const { routes: exploreRoutes, index: exploreIndex } = exploreState;
          const exploreActiveRoute = exploreRoutes[exploreIndex];
          console.log(exploreActiveRoute.name)
          if (exploreActiveRoute.name == "Home") tabBarVisible = true;
        }
        return {
          tabBarVisible:tabBarVisible,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        };
      }}
      />
      {/* <Tab.Screen name="Home" component={HomeScreen} 
      
      options={{ 
        headerShown: false, 
        cardStyle: { backgroundColor: '#FFFFFF' },
        Label: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={26} />
        ),
        }}
        
        /> */}
      <Tab.Screen name="Order-Detail" component={OrderDetail}
      
      options={{ 
        headerMode: 'screen',
    cardStyle: { backgroundColor: '#FFFFFF' },
        Label: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
        ),
        }}
        
        />


        <Tab.Screen name="SearchPage" component={SearchPage}
              
          options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: '#FFFFFF' },
            Label: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" color={color} size={26} />
            ),
            }}
          
        />
      <Tab.Screen  name="UserMenu" component={UserMenu}  
       options={{ 
        headerShown: false, 
        cardStyle: { backgroundColor: '#FFFFFF' },
        Label: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user-o" color={color} size={26} />
        ),
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}





export default App;
