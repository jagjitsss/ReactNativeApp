import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image  } from 'react-native';
import styles from './recent_styles';
import { Cart } from '../../data/dataArrays';
import { SearchBar } from 'react-native-elements';


export default class recentSearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    
  }
  updateSearch = (search) => {
    this.setState({ search });
  };


  renderPromo = ({ item, index }) => (
        <TouchableOpacity  >
            <View style={styles.container}>
                <Image source={require('../../../assets/icons/Clock.png')} style={styles.photo} />
                <View>
                  <Text style={[styles.text,{width:250}]}  numberOfLines={1}>{item.title}</Text>
                 </View> 
            </View>
            
        </TouchableOpacity>

  );


 


  render() {

    const { search } = this.state;

    return (
      <SafeAreaView >

         <View>
            <SearchBar
              placeholder="Search for a dish..."
              onChangeText={this.updateSearch}
              value={search}
              inputContainerStyle={{backgroundColor: '#fff'}}
              leftIconContainerStyle={{backgroundColor: '#fff'}}
              inputStyle={{backgroundColor: '#fff'}}
              containerStyle={{
              backgroundColor: '#F2F3F5',
              justifyContent: 'space-around',
              borderTopWidth:0,
              borderBottomWidth:0,
              }}
              

            />
         </View>
        <ScrollView  style={{marginBottom:90}} >
        <Text style={[styles.text,{width:250, marginTop:25, marginBottom:20,fontWeight:"bold"}]}  numberOfLines={1}>Recent Searches</Text>
          <FlatList
                vertical
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Cart}
                renderItem={this.renderPromo}
                keyExtractor={item => `${item.recipeId}`}
            />
        </ScrollView>
          
      </SafeAreaView>
    );
  }
}

