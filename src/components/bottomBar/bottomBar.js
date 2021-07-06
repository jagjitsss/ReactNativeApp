import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import SearchPage from '../../pages/search/search';
import UserMenu from '../../pages/user/menu/menu';
import styles from './style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

class BottomBar extends Component {

  constructor(){
    super()
    this.state = {
      routeNameSelected:'Home'
    }
  }

  onPressTab(routeName){
     
   }

  render() {
const {navigation} = this.props;
        return (
          <View style={styles.tabbar}>
            <Tab.Navigator>
              <Tab.Screen name="SearchPage" component={SearchPage} />
              <Tab.Screen name="UserMenu" component={UserMenu} />
            </Tab.Navigator>
          </View>
        );
  }
}

export default BottomBar;