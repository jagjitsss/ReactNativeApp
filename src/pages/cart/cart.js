import React from 'react';
import { LogBox  , ScrollView, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const star = <Icon name="star" size={20} color="#6B6B6B"  />;
LogBox.ignoreAllLogs();




export default class CartPage extends React.Component {


  constructor(props) {
    super(props);
  
  }

  
  

  render() {

  

    return (

      <SafeAreaView >
      <ScrollView   >

      <View >
            <Text style={{textAlign:"center"}}>Cart Page</Text>
          </View>


         
          

      </ScrollView>
      </SafeAreaView>
    );
  }
}

