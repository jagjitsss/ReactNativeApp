import React from 'react';
import { TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
const star = <Icon name="star" size={20} color="#6B6B6B"  />;
export default class PaymentMethod extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        checked:true,
        checked1:false,
        checked2:false,
    }
  
  }


  render() {
    const {checked, checked1 , checked2 } =this.state;
    return (

      <SafeAreaView >
        <ScrollView  style={{marginBottom:90}} >
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Payments</Text>
             <TouchableOpacity style={{marginTop:20}}>
                <View style={styles.container}>
                  <Image source={require('../../../assets/icons/PayPal.png')} style={styles.photo} />
                  <View style={{flex:1, justifyContent:"flex-start"}}>
                      <Text style={styles.text}>Paypal</Text>
                      </View>
                      <CheckBox
                          title=''
                          checked={checked}
                          onPress={() => this.setState({checked: true, checked1: false, checked2: false, })}
                          checkedIcon={<Image source={require('../../../assets/icons/listPayments.png')} />}
                          uncheckedIcon={<Image source={require('../../../assets/icons/RadioUnchecked.png')} />}
                          containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                      />
                </View>
            </TouchableOpacity >
            <TouchableOpacity>
                <View style={styles.container}>
                  <Image source={require('../../../assets/icons/card.png')} style={styles.photo} />
                   <View style={{flex:1, justifyContent:"flex-start"}}>
                     <Text style={styles.text}>Credit Card</Text>
                    </View>
                    <CheckBox
                        title=''
                        checked={checked1}
                        onPress={() => this.setState({checked: false, checked1: true, checked2: false, })}
                        checkedIcon={<Image source={require('../../../assets/icons/listPayments.png')} />}
                        uncheckedIcon={<Image source={require('../../../assets/icons/RadioUnchecked.png')} />}
                        containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                    />
                </View>
            </TouchableOpacity >


            <TouchableOpacity>
                <View style={styles.container}>
                  <Image source={require('../../../assets/icons/PayPal.png')} style={styles.photo} />
                    <View style={{flex:1, justifyContent:"flex-start"}}>
                    <Text style={[styles.text, {justifyContent: 'flex-start'}]}>Apple Pay</Text>
                    </View>
                    <CheckBox
                        title=''
                        checked={checked2}
                        onPress={() => this.setState({checked: false, checked1: false, checked2: true, })}
                        checkedIcon={<Image source={require('../../../assets/icons/listPayments.png')} />}
                        uncheckedIcon={<Image source={require('../../../assets/icons/RadioUnchecked.png')} />}
                        containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                    />
                </View>
            </TouchableOpacity >
        </ScrollView>
            <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Add-Card')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>Pay Now </Text>
                    <Text  style={styles.btnText}>$20.00</Text>
                </View>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
  }
}

