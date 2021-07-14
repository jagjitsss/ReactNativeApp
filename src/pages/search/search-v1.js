import React from 'react';
import { FlatList, TouchableOpacity,  ScrollView, SafeAreaView, Text, View, Image  } from 'react-native';
import styles from './styles-v1';
import { SearchBar } from 'react-native-elements';


export default class SearchPage1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      Category: [
        {
          "name": "Asian",
          "cate_img": require('../../../assets/icons/Asian.png')
        },
        {
          "name": "American",
          "cate_img": require('../../../assets/icons/American.png')
        },
        {
            "name": "Fast Food",
            "cate_img": require('../../../assets/icons/FastFood.png')
         },
        {
          "name": "Mexican",
          "cate_img": require('../../../assets/icons/Mexican.png')
        },
        {
          "name": "Italian",
          "cate_img": require('../../../assets/icons/Italian.png')
        },
        {
          "name": "Vegetarian",
          "cate_img": require('../../../assets/icons/Vegetarian.png')
        }
       
      ],

    };
    
  }
  updateSearch = (search) => {
    this.setState({ search });
  };


  renderRestaurants = ({ item, index }) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' >
      <View style={styles.container} key={index}>
      <Image style={styles.photo} source={item.cate_img} />
        <Text style={styles.title}  numberOfLines={1}>{item.name}</Text>
       
      </View>
    </TouchableOpacity >
  );



 


  render() {

    const { search, Category } = this.state;
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

         <View>
           <Text style={[styles.text,{width:250}]}  numberOfLines={1}>Top Category</Text>
         </View>
        <ScrollView  style={{marginBottom:90}} >
                <FlatList
                vertical
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={Category}
                renderItem={this.renderRestaurants}
                keyExtractor={item => `${item.name}`}
            />
        </ScrollView>
          
      </SafeAreaView>
    );
  }
}

