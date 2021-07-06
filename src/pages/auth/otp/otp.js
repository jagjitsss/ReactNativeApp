import React from 'react';
import { TouchableOpacity, ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
export default class OTP extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        value:"",
    }
  }

  getCellOnLayoutHandler(index){
       this.setState({
            value:index
       })
  }


  render() {

    const {value}=this.state;
    return (

      <SafeAreaView >
        <ScrollView>
        <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Verification</Text>
          <View style={styles.containerTop}>
             <View style={styles.container}>
                <Text  style={styles.label}>Enter your OTP code here</Text>
                <CodeField
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                   // onChangeText={setValue}
                    cellCount={6}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        >
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    )}
                 />
                  <Text  style={styles.title_}>Didn't receive the OTP? <Text style={{color:"#2F80ED"}}>Resend</Text></Text>
            </View>

             <View >
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('SignIn')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>VERIFY </Text>
                </View>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

