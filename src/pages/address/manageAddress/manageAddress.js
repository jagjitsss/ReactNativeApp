import React from 'react';
import {TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
export default class ManageAddress extends React.Component {

  constructor(props) {
    super(props);
  }

  

  render() {

    return (
      <SafeAreaView >
        <ScrollView>
          <BackButton backIcon={true  } onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Manage address</Text>
          <Text style={styles.textTitle}>SAVED ADDRESSES   </Text>
          <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/home.png')}  style={styles.icon_} />&nbsp;Home</Text>
          <Text style={styles.smalltext}>49 Ellsworth Ave, New Haven, CT 06511</Text>
          <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/work.png')}  /> Work</Text>
          <Text style={styles.smalltext}>&nbsp;70 Atlantic St, Stamford, CT 06901</Text>
          <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/addressPin.png')}  /> Other</Text>
          <Text style={styles.smalltext}>&nbsp;77 Bristol St, New Haven, CT 06511</Text>

          <View >
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select-Location')}>
              <View style={styles.btnClickContain_right}>
                  <Text style={styles.btnText}>Add New Address </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
      </SafeAreaView>
    );
  }
}

