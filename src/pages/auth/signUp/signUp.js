import React from 'react';
import { TouchableOpacity, TextInput , ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoDesign from 'react-native-vector-icons/Fontisto';

export default class SignUp extends React.Component {

 
  constructor(props) {
    super(props);
    this.state={
        value:"",
        value1:"",
        value2:"",
        value3:""
    }
   
  
  }



  render() {

     const {value, value1, value2} = this.state;

    return (

      <SafeAreaView>
        <ScrollView>
          <Text style={styles.textTitle}>Sign Up </Text>
          <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            {value ? <Icon style={styles.camraIcon} name="check" size={20} color="#FFCC4E"/> : <Icon style={styles.camraIcon} name="user" size={20} color="#000"/> }
              <TextInput
                style={styles.TextInput}
                onChangeText={(value) => this.setState({value})}
                value={value}
                id="itemID3"
              />
           <Text  style={styles.label}>Email</Text>
           {value1 ? <Icon style={styles.camraIcon0} name="check" size={20} color="#FFCC4E"/> : <FontistoDesign style={styles.camraIcon0} name="email" size={20} color="#000"/> }
              <TextInput
                style={styles.TextInput}
                onChangeText={(value1) => this.setState({value1})}
                value={this.state.value1}
                id="itemID2"
              />  
           <Text  style={styles.label}>Password</Text>
           {value2 ? <Icon style={styles.camraIcon1} name="check" size={20} color="#FFCC4E"/> : <Icon style={styles.camraIcon1} name="eye" size={20} color="#000"/> }
              <TextInput
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={(value2) => this.setState({value2})}
                value={this.state.value2}
                id="itemID1"
              />  
           </View>   
        </ScrollView>
            <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Home')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>Sign Up </Text>
                </View>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}

