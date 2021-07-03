import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  title: {
    marginLeft: 15,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    
  },

  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    //borderWidth:.2,
    //borderBottomColor:"#C5C6C8"
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  btnClickContain_right: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width:"92%",
    marginRight :10,
    backgroundColor: '#FFCC4E',
    alignSelf: 'stretch',
    marginLeft:15,
    marginRight:15,
    height:60,
    borderRadius:15,
    padding:13  
    
  },
 
  btnText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginTop: 2,
    
  }
  
  
});

export default styles;
