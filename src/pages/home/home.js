import React from 'react';
import { FlatList, LogBox  ,TouchableOpacity ,  ScrollView, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './styles';
import { Restaurant, categories, promo } from '../../data/dataArrays';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BottomBar from '../../components/bottomBar/bottomBar';

const star = <Icon name="star" size={20} color="#6B6B6B"  />;
LogBox.ignoreAllLogs();

export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);
  
  }

  onPressPromo = item => {
    this.props.navigation.navigate('Offers', { item });
  };

  onPressRecipe = item => {
    this.props.navigation.navigate('Restaurant-Menu', { item });
  };

  renderCategory = ({ item }) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.CategoryContainer} key={item}>
        {item.isActive ? 
            <Icon style={{ marginBottom: 10, padding:13, height:80,  marginLeft: 10,  marginRight: 10, textAlign: "center", backgroundColor : "#FFCC4E", borderRadius: 15, overflow: 'hidden' }} name={item.imageUrl} size={45} color="#000" />
         :
            <Icon style={{ marginBottom: 10, padding:11, height:80,  marginLeft: 10,  marginRight: 10, textAlign: "center", borderRadius: 15,  overflow: 'hidden' }} name={item.imageUrl} size={45} color="#000" /> 
        } 
        <Text style={{ marginBottom: 10, textAlign: "center" }}>{item.title}</Text>
      </View>
    </TouchableOpacity >
  );

  renderPromo = ({ item, index }) => (
    <TouchableOpacity  onPress={() => this.onPressPromo(item)}>
      <View style={styles.Promocontainer} key={index}>
         <Image key={index+"_a"} style={styles.promImg} source={{ uri: item.imageUrl }} />
      </View>
    </TouchableOpacity >
  );

  renderRestaurants = ({ item, index }) => (
    <TouchableOpacity  underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container} key={index}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{star} {item.rating}&nbsp;&nbsp;&nbsp; 15-20 mins&nbsp;&nbsp;&nbsp; $20</Text>
      </View>
    </TouchableOpacity >
  );

  

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
            <View style={styles.headingcontainer}>
              <Text style={styles.topHeading}>DELIVER TO</Text>
              <Text style={styles.fulltitle}>883 SpringSt. San Francisco </Text>
            </View>
            <FlatList
                horizontal
                numColumns={1}
                data={categories}
                renderItem={this.renderCategory}
                keyExtractor={item => `${item.title}`}
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.headingcontainer}>
              <Text style={styles.headingings}>Promo</Text>
            </View>
            <FlatList
                horizontal
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={promo}
                renderItem={this.renderPromo}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
            />
            <View style={styles.headingcontainer}>
              <Text style={styles.headingings}>Restaurants</Text>
            </View>
            <FlatList
                vertical
                itemDimension={90}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Restaurant}
                renderItem={this.renderRestaurants}
                keyExtractor={item => `${item.recipeId}`}
            />
        </ScrollView>
        
      </SafeAreaView>

      
    );
  }
}

