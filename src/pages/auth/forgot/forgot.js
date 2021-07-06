import React from 'react';
import { TouchableOpacity, TextInput , ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoDesign from 'react-native-vector-icons/Fontisto';


export default class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        value:"",
    }
   
  }

  render() {

     const { value1} = this.state;
     return (
      <SafeAreaView>
        <ScrollView>
        <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.label_}>Please enter your email address. You will receive a link to create a new password via email.</Text>
          <View style={styles.container}>
           <Text  style={styles.label}>Email</Text>
           {value1 ? <Icon style={styles.camraIcon} name="check" size={20} color="#FFCC4E"/> : <FontistoDesign style={styles.camraIcon} name="email" size={20} color="#000"/> }
              <TextInput
                style={styles.TextInput}
                onChangeText={(value1) => this.setState({value1})}
                value={this.state.value1}
                id="itemID2"
              />  
           </View>   
        </ScrollView>
            <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ResetPassword')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>SEND </Text>
                </View>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}

