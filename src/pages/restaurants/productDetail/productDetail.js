import React from 'react';
import {  TouchableOpacity,  ImageBackground ,  ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import { CheckBox } from 'react-native-elements'

export default class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        checked:true,
        checked1:false,
        checked2:false,
        checked4:false,
        checked5:false,
        qty:1
    }
  }


  qtyValue = (flag) =>{
     if(flag=="add"){
        this.setState({
            qty: this.state.qty +1
        })
     }else{
       if(this.state.qty > 1){
        this.setState({
            qty: this.state.qty - 1
        })
       }

     }  
  }



  render() {

    const {checked, checked1, checked2, checked4, checked5, qty} =this.state;
    const {route } =this.props;
    return (

      <SafeAreaView >
        <ScrollView  style={{marginBottom:90}} >
              <ImageBackground source={{uri:route.params.item.photo_url}} style={{height:260}}>
                <BackButton onPress={() => {this.props.navigation.goBack();}}/>
              </ImageBackground>

              <Text style={styles.text}>{route.params.item.title}</Text>
              <Text style={styles.smalltext}>{route.params.item.description}</Text>

              <Text style={styles.headingtext}>Additional-ingredients</Text>
              <View style={styles.flexDirection_}>
                <CheckBox
                      title='Cheese'
                      checked={checked}
                      onPress={() => this.setState({checked: !this.state.checked})}
                      checkedIcon={<Image source={require('../../../../assets/icons/Checked.png')} />}
                      uncheckedIcon={<Image source={require('../../../../assets/icons/UNChecked.png')} />}
                      containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                  />
                  <Text style={[styles.headingtext, {marginRight:20, color:checked ? "#FFCC4E"  :"#000"}]}>+$25.00</Text>
              </View>
              <View style={styles.flexDirection_}>
                <CheckBox
                      title='Tomatoes'
                      checked={checked1}
                      onPress={() => this.setState({checked1: !this.state.checked1})}
                      checkedIcon={<Image source={require('../../../../assets/icons/Checked.png')} />}
                      uncheckedIcon={<Image source={require('../../../../assets/icons/UNChecked.png')} />}
                      containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                  />
                    <Text style={[styles.headingtext, {marginRight:20, color:checked1 ? "#FFCC4E"  :"#000"}]}>+$25.00</Text>
              </View>
              <View style={styles.flexDirection_}>
                <CheckBox
                      title='Mushrooms'
                      checked={checked2}
                      onPress={() => this.setState({checked2: !this.state.checked2})}
                      checkedIcon={<Image source={require('../../../../assets/icons/Checked.png')} />}
                      uncheckedIcon={<Image source={require('../../../../assets/icons/UNChecked.png')} />}
                      containerStyle ={{backgroundColor: 'transparent', borderColor:"#fff"}}
                  />
                  <Text style={[styles.headingtext, {marginRight:20, color:checked2 ? "#FFCC4E"  :"#000"}]}>+$25.00</Text>
              </View>
              <View style={styles.flexDirection_}>
                <CheckBox
                      title='Cake'
                      checked={checked4}
                      onPress={() => this.setState({checked4: !this.state.checked4})}
                      checkedIcon={<Image source={require('../../../../assets/icons/Checked.png')} />}
                      uncheckedIcon={<Image source={require('../../../../assets/icons/UNChecked.png')} />}
                      containerStyle ={{backgroundColor: 'transparent',borderColor:"#fff"}}
                  />
                    <Text style={[styles.headingtext, {marginRight:20, color:checked4 ? "#FFCC4E"  :"#000"}]}>+$25.00</Text>
              </View>
              <View style={styles.flexDirection_}>
                <CheckBox
                      title='Mushrooms'
                      checked={checked5}
                      onPress={() => this.setState({checked5: !this.state.checked5})}
                      checkedIcon={<Image source={require('../../../../assets/icons/Checked.png')} />}
                      uncheckedIcon={<Image source={require('../../../../assets/icons/UNChecked.png')} />}
                      containerStyle ={{backgroundColor: 'transparent', borderColor:"#fff"}}
                  />
                  <Text style={[styles.headingtext, {marginRight:20, color:checked5 ? "#FFCC4E"  :"#000"}]}>+$25.00</Text>
              </View>
        
        </ScrollView>
        <View style={{flexDirection: "row", position:"absolute", bottom:5}}>
            <View style = {{flex: 1, justifyContent: 'flex-start',}}>
                <View  style={styles.btnClickContain_left}>
                    <TouchableOpacity  onPress={()=>{this.qtyValue('remove')}}>
                        <Image source={require('../../../../assets/icons/Minus.png')}/>
                    </TouchableOpacity>
                      <Text style={{fontSize:18}}>{qty}</Text>
                    <TouchableOpacity  onPress={()=>{this.qtyValue('add')}}>
                        <Image source={require('../../../../assets/icons/Plus.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {{flex: 1.5}}>
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Order-Detail')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>Add </Text>
                    <Text  style={styles.btnText}>$20.00</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}

