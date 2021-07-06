import React from 'react';
import { TouchableOpacity, TextInput , ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import FontistoDesign from 'react-native-vector-icons/Fontisto';

export default class ResetPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        value:"",
        value1:"",
    }
  }



  render() {

     const {value, value1} = this.state;

    return (

      <SafeAreaView >
        <ScrollView   >
        <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.label_}>Enter new password and confirm.</Text>
          <View style={styles.container}>
           <Text  style={styles.label}>New Password</Text>
           <FontistoDesign style={styles.camraIcon} name="eye" size={20} color="#000"/>
              <TextInput
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={(value) => this.setState({value})}
                value={value}
                id="itemID2"
              />  
           <Text  style={styles.label}>Confirm Password</Text>
           <FontistoDesign style={styles.camraIcon1} name="eye" size={20} color="#000"/>
              <TextInput
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={(value1) => this.setState({value1})}
                value={value1}
                id="itemID2"
              /> 
           </View>   
        </ScrollView>
            <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Home')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>CHANGE PASSWORD </Text>
                </View>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}

