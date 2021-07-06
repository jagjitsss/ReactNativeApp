import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  
  title: {
    marginLeft: 15,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    position:'absolute',
    top:0,
    right: 0,
    left:0
    
  },
  container: {
    padding: 12,
    marginTop:10,
    marginLeft:15,
    marginRight:15

  },

  container1: {
    padding: 12,
    marginLeft:15,
    marginRight:15,
    flex:1,
    flexDirection: "row",
    justifyContent:'space-between', 

  },

  label: {
    fontSize: 16,
    color:"#333333",
    marginTop:20
  },

  label_:{
    fontSize: 16,
    color:"#333333",
    marginTop:50,
    marginLeft:20
  },
  
  TextInput :{
    height: 40,
    borderBottomColor:"gray",
    borderBottomWidth: .3

  },

  btnClickContain_right: {
    width:"90%",
    marginRight :10,
    backgroundColor: '#FFCC4E',
    alignSelf: 'stretch',
    marginLeft:15,
    height:60,
    borderRadius:15,
    padding:12,
    //position:"absolute", 
    bottom:0,
    alignSelf:"center"
    
  },
 
  btnText: {
    fontSize: 20,
    color: '#000',
    marginTop: 2,
    textAlign:"center"
    
  },


  camraIcon: {
    flex:1,
    justifyContent:'space-between', 
    padding: 10,
    position:"absolute",
    right:5,
    bottom:0,
    top:40
},

camraIcon1: {
    flex:1,
    justifyContent:'space-between', 
    padding: 10,
    position:"absolute",
    right:5,
    bottom:10,
    //top:"80%"
  },


textTitle: {
    marginLeft: 23,
    marginBottom:0,
    marginTop:30,
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    letterSpacing:1
    
},


  

 
 
  
});

export default styles;
