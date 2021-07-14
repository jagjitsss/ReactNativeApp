import React from 'react';
import { FlatList, TouchableOpacity, TextInput , ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../../components/BackButton/BackButton';
import { Restaurant } from '../../../data/dataArrays';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
const dot = <OcticonsIcon name="primitive-dot" size={10} color="#6B6B6B"  />;


export default class UserOrders extends React.Component {

 
  constructor(props) {
    super(props);
    this.state={
        status:false,
    }
   
  
  }

  ShowDiv(){
       this.setState({
        status:true
       })   
  }



  

  renderRestaurants = ({ item, index }) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)'  >
      <View>
          <View style={styles.listItem}>
                <View>
                    <Text style={styles.title1}>{item.title}</Text>
                    <Text style={styles.date}> 31 May 2020, 07:55 PM &nbsp;{dot}&nbsp; $43.95</Text>
                </View>
            <View>
               {index ==2 ? <Text style={styles.btnCanl}>Cancelled</Text> : <Text style={styles.btnDelv}>Delivered</Text>}
            </View> 
          </View>  

        <View style={{flex:1,}}>

        {index ==0 ?
        <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' onPress={(e)=>this.ShowDiv()} >
            <Image source={require("../../../../assets/icons/Collapse.png")}   style={{position:"absolute",marginBottom:0, bottom:0,width:"100%"}}/>
          </TouchableOpacity>  

          :<TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' onPress={(e)=>this.ShowDiv()} >
          <Image source={require("../../../../assets/icons/CollapseClosed.png")}   style={{position:"absolute",bottom:4, width:"100%"}}/>
        </TouchableOpacity>  }
        </View>

        {index ==0 ?
        <View>
       
        <View style={styles.container1}>
                <Text style={[styles.text]}>1 X{item.title}</Text>
                <Text style={[styles.text]}>${item.price}</Text>
         </View>

         <View style={styles.container1}>
                <Text style={[styles.text ]}>1 X{item.title}</Text>
                <Text style={[styles.text]}>${item.price}</Text>
         </View>

         <View style={styles.container1}>
                <Text style={styles.text}> 1 X{item.title}</Text>
                <Text style={[styles.text]}>${item.price}</Text>
         </View>

         <TouchableOpacity >
                <View style={styles.btnClickContain_right}>
                    <Text style={styles.btnText}>REORDER </Text>
                </View>
            </TouchableOpacity>
         </View>  
        : <Text ></Text>} 

    </View>
    </TouchableOpacity >
  );

  



  render() {

     const {value} = this.state;

    return (

      <SafeAreaView style={{marginBottom:80}}>
          <BackButton backIcon={true} onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Orders</Text>
        <ScrollView>

        <View style={styles.container}>
                    <FlatList
                        style={{flex:1}}
                        data={Restaurant}
                        renderItem={this.renderRestaurants}
                        keyExtractor={item => item.recipeId}
                    />
        </View>
          
        </ScrollView>
           
      </SafeAreaView>
    );
  }
}


