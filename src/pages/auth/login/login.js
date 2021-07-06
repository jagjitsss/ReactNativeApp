import React from 'react';
import { TextInput,  TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        value:"",
    }
  }

  render() {

    return (

      <SafeAreaView>
        <ScrollView>
        <Image source={require('../../../../assets/icons/image_welcome.png')} style={styles.img}/>
        <Image source={require('../../../../assets/icons/bg.png')} style={styles.bgImg}/>
         <View style={styles.containerTop}>
             <Text style={styles.textTitle}>Welcome!</Text>
             <Text style={styles.smalltextTitle}>Sign In or Create Account to quickly manage orders</Text>
             <View style={styles.container}>
                <Text  style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={(value) => this.setState({value})}
                    value={this.state.value}
                    id="itemID"
                />  
            </View>
             <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('OTP')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>CONTINUE </Text>
                </View>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

