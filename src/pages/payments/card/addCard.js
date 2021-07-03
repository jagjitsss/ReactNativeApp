import React from 'react';
import { TouchableOpacity, TextInput , ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AddCard extends React.Component {

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

    return (
      <SafeAreaView>
        <ScrollView>
            <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
            <Text style={styles.title}>Add Credit Card </Text>
            <Image source={require('../../../../assets/icons/card1.png')} style={{marginTop:15, alignSelf:"center"}}/>
            <View style={styles.container}>
              <Text style={styles.label}>CARD HOLDER NAME</Text>
                <TextInput
                  style={styles.TextInput}
                  onChangeText={(value) => this.setState({value})}
                  value={this.state.value}
                  id="itemID"
                />

            <Text  style={styles.label}>CARD NUMBER</Text>
              <Icon style={styles.camraIcon} name="camera" size={20} color="#000"/>
                <TextInput
                  style={styles.TextInput}
                  onChangeText={(value1) => this.setState({value1})}
                  value={this.state.value1}
                  id="itemID"
                />  
            </View>   

            <View  style={styles.container1}>
                <View style={{width:100,flex:.4}}>
                    <Text  style={styles.label}>MM/YY</Text>
                    <TextInput
                      style={styles.TextInput}
                      onChangeText={(value2) => this.setState({value2})}
                      value={this.state.value2}
                      id="itemID"
                    /> 
                </View>  

                <View style={{width:100,flex:.4}}>
                    <Text  style={styles.label}>CVC</Text>
                    <TextInput
                      style={styles.TextInput}
                      onChangeText={(value3) => this.setState({value3})}
                      value={this.state.value3}
                      id="itemID"
                    /> 
                </View>  
            </View>
        </ScrollView>
            <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ManageAddress')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>Save </Text>
                </View>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}

