
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',

  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
  photo: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  btnClickContain_right: {
    width:"92%",
    marginRight :10,
    backgroundColor: '#F0F0F0',
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
    textAlign:"center"
    
  },
  serachInput:{
      backgroundColor:"#fff"
  },
 
  smalltext: {
    marginLeft: 20,
    marginBottom:1,
    marginTop:10,
    color: "#444444",
    fontSize: 22,
    fontWeight: "bold",
  },
  icon_:{
    marginRight:0,
    height:60,
    width:60,
  },
  
  
});

export default styles;
