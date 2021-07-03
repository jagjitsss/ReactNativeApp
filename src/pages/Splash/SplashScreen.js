import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncImageAnimated,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
  
 componentDidMount(){  
   var that = this;  

   setTimeout(
    function() {
      this.props.navigation.navigate('Home');
      that.Hide_Splash_Screen();  
    }
    .bind(this),
    3000
  );

 
  }  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} />
      </View>
    );
  }
}
