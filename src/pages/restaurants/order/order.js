import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import { Cart } from '../../../data/dataArrays';
import BackButton from '../../../components/BackButton/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';


const star = <Icon name="star" size={20} color="#6B6B6B"  />;

export default class OrderDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  renderPromo = ({ item, index }) => (
        <TouchableOpacity  >
          {index != 5   ? 
            <View style={styles.container}>
                <Image source={{ uri: item.photo_url}} style={styles.photo} />
                <Text style={styles.text}>1 X</Text>
                <Text style={[styles.text, {width:150}]}>{item.title}</Text>
                <Text style={[styles.text]}>${item.price}</Text>
            </View>
            :  <View style={styles.container1}>
                  <Image source={require('../../../../assets/icons/Icon_del.png')} style={styles.photo} />
                  <Text style={[styles.text, {width:195}]}>Delivery</Text>
                  <Text style={[styles.text,{marginLeft:0}]}>$20.00 </Text>


              </View>
              }

        </TouchableOpacity>

  );


 


  render() {


    return (
      <SafeAreaView  style={{backgroundColor:"#fff", height:"100%" }}>
        <ScrollView  style={{marginBottom:90}} >
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Order</Text>
          <FlatList
                vertical
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Cart}
                renderItem={this.renderPromo}
                keyExtractor={item => `${item.recipeId}`}
            />
            <Image source={require('../../../../assets/icons/dashed_border.png')} />

            <View style={styles.container3}>
                  <Text style={[styles.text, {width:250, fontWeight:"bold"}]}>Total</Text>
                  <Text style={[styles.text,{marginLeft:0,fontWeight:"bold"}]}>$200.00 </Text>
            </View>

        </ScrollView>
        <View style={{flexDirection: "row", position:"absolute", bottom:5, borderTopColor:"#F2F3F5", borderTopWidth:1, marginTop:10, padding:10}}>
            <View style = {{flex: 1.5}}>
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Payments-method')}>
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>CHECKOUT </Text>
                    <Text  style={styles.btnText}>$20.00</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
