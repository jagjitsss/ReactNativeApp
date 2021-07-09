import React from 'react';
import { ImageBackground,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';

export default class OrderTracking extends React.Component {

  constructor(props) {
    super(props);
  }

  

  render() {

    return (

      <SafeAreaView>
        <ScrollView>
            <ImageBackground source={{uri:'https://lun-eu-assets.s3.eu-central-003.backblazeb2.com/0B7leVKDf0m0aFTwS0RpVA/1-LL-lL-FE6VMpOAx4vgMg/Map-2.png' }} style={{height:350}}>
              <BackButton backIcon={true  } onPress={() => {this.props.navigation.goBack();}}/>
            </ImageBackground>

            <Text style={styles.textTitle}>Order Tracking   </Text>
            <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/time.png')} style={styles.icon_} />&nbsp;Delivery Time</Text>
            <Text style={styles.smalltext}>15 min - 20 min</Text>
            <Text style={styles.extrasmalltext}><Image source={require('../../../../assets/icons/addressPin.png')} style={styles.icon_} /> Delivery Address</Text>
            <Text style={styles.smalltext}>&nbsp;70 Atlantic St, Stamford</Text>
            <View style={styles.container}>
              <Image source={require('../../../../assets/icons/Avatars.png')} style={styles.photo} /> 
              <View style={{flex:1, justifyContent:"flex-start"}}>
                  <Text style={styles.smalltext1}>Bryan Brendle</Text>
                  <Text style={styles.extrasmalltext1}>Food Courier   </Text>
              </View> 
              <TouchableOpacity >
                <Image source={require('../../../../assets/icons/Button.png')} style={styles.photo} />
              </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

