
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:"space-evenly", 
  },

  colum:{
       justifyContent: 'center',
       alignItems: 'center',
       width:80
  },
  text: {
    marginLeft: 0,
    fontSize: 12,
    marginTop:10
  },
  photo_pic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  imagePicIsActive:{
        backgroundColor:"#FFCC66",
        padding:15,
        borderRadius:10
  },
  imagePicInActive:{
    backgroundColor:"#fff",
    padding:15,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#EAEBEF"
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
    marginBottom:40,
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
