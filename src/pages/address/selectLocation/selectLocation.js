import React from 'react';
import { ImageBackground,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import Geolocation from "react-native-geolocation-service";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default class SelectLocation extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        saveAs:"1",
        latitude: 0,
       longitude: 0,
       coordinates: [],
    }
  }

  componentDidMount() {

    /*Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
      }
    );*/
  }

  

  render() {
    const {saveAs}=this.state;

    return (

      <SafeAreaView>
       <TouchableOpacity onPress={() => {this.props.navigation.goBack();}} style={styles.btnContainer}>
          <Image source={require('../../../../assets/icons/ArrowblackLeft.png')} style={styles.btnIcon} />
      </TouchableOpacity>
        <ScrollView>
       
          
        <View style={styles.container2}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}>
          </Marker>
      </MapView>
        </View>
        
          {/* <ImageBackground source={{uri:'https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg' }} style={{height:350}}>
         
          </ImageBackground> */}
          <View>
          
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
          </View>  
        </ScrollView>
      </SafeAreaView>
    );
  }
}



