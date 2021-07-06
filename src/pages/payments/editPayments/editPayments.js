import React from 'react';
import {TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';

export default class EditPayments extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <SafeAreaView >
        <ScrollView  style={{marginBottom:90}} >
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Payments</Text>
          <TouchableOpacity style={{marginTop:20}}  onPress = {()=> this.props.navigation.navigate('Add-Card')}>
                <View style={styles.container}>
                  <Image source={require('../../../../assets/icons/PayPal.png')} style={styles.photo} />
                  <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Text style={[styles.text, {justifyContent: 'flex-start'}]}>
                         Paypal
                    </Text>
                    </View>
                    <Image source={require('../../../../assets/icons/ButtonsAdd.png')} style={styles.photo} />
                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Add-Card')}>
                <View style={styles.container}>
                  <Image source={require('../../../../assets/icons/card.png')} style={styles.photo} />
                    <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Text style={[styles.text, {justifyContent: 'flex-start'}]}>
                        Credit Card
                    </Text>
                    </View>
                    <Image source={require('../../../../assets/icons/ButtonsAdd.png')} style={styles.photo} />
                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Add-Card')}>
                <View style={styles.container}>
                  <Image source={require('../../../../assets/icons/PayPal.png')} style={styles.photo} />
                  <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Text style={[styles.text, {justifyContent: 'flex-start'}]}>
                     Apple Pay
                    </Text>
                    </View>
                    <Image source={require('../../../../assets/icons/Buttons_Add.png')} style={[styles.photo, {justifyContent: 'space-between'}]} />
                </View>
            </TouchableOpacity >
        </ScrollView>
      </SafeAreaView>
    );
  }
}

