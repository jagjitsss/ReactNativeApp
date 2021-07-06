import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image  } from 'react-native';
import styles from './styles';
import { Cart } from '../../data/dataArrays';
import { SearchBar } from 'react-native-elements';


export default class SearchPage extends React.Component {

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
                <Image source={{ uri: item.photo_url}} style={styles.photo} />
                <View>
                  <Text style={[styles.text,{width:250}]}  numberOfLines={1}>{item.title}</Text>
                  <Text style={[styles.text]}>${item.price}</Text>
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

