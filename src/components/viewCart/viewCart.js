import React from 'react';
import {TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';
import styles from './style';

export default class ViewCart extends React.Component {


  render() {

    const AppButton = ({ onPress, title }) => (
      <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
    );


    return (
          <TouchableHighlight onPress={()=>{}}>
              <View style={styles.btnClickContain}>
                 <View style={{BackgroundColor:"#000"}}>
                   <Text  style={[styles.btnText, {color:"#fff", textAlign:"center",paddingLeft:5,paddingRight:5,  borderRadius:8,  backgroundColor: '#29363D', alignSelf: 'flex-start'}]}>3</Text>
                </View> 
                <Text style={styles.btnText}>View Cart</Text>
                <Text  style={styles.btnText}>$20.00</Text>
              </View>
          </TouchableHighlight>
       

    );
  }
}

