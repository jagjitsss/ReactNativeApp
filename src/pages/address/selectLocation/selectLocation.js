import React from 'react';
import { ImageBackground,  TouchableOpacity, ScrollView, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';

export default class SelectLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        saveAs:"1"
    }
  }

  

  render() {
    const {saveAs}=this.state;

    return (

      <SafeAreaView>
        <ScrollView>
          <ImageBackground source={{uri:'https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg' }} style={{height:350}}>
            <BackButton backIcon={true  } onPress={() => {this.props.navigation.goBack();}}/>
          </ImageBackground>
          <Text style={styles.textTitle}>Select Location</Text>
          <Text style={styles.extrasmalltext}>Your Location</Text>
          <Text style={styles.smalltext}>49 Ellsworth Ave, New Haven, CT 06511</Text>
          <Text style={styles.extrasmalltext}>Save as</Text>
          <View style={styles.container}>
              <TouchableOpacity onPress = {()=> this.setState({saveAs:"0"})}>
                <Text style={[styles.text, {backgroundColor : saveAs =='0' ? "#fff" :"#EFEFF4"}]} >Home</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {()=> {this.setState({saveAs:"1"})}}>
                  <Text style={[styles.text, {backgroundColor : saveAs =='1' ? "#fff" :"#EFEFF4"}]}>Work</Text>
              </TouchableOpacity >

              <TouchableOpacity onPress = {()=> this.setState({saveAs:"2"})}>
                  <Text style={[styles.text, {backgroundColor : saveAs =='2' ? "#fff" :"#EFEFF4"}]}>Other</Text>
              </TouchableOpacity>
          </View>

          <View >
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate('OrderTracking')}>
              <View style={styles.btnClickContain_right}>
                  <Text style={styles.btnText}>Save Address </Text>
              </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

