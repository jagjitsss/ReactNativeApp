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
    position:'absolute',
    top:0,
    right: '40%'
  },
  textb:{
   fontWeight:"bold",
   textAlign:"center",
   fontSize:17
  }, 
  copyText:{
    backgroundColor:"#000",
    color:"#FFCC4E",
    height:60,
    width:80,
    padding:17,
    textAlign:"center",
    textTransform:"uppercase",
    borderRadius:15,
    fontSize:17,
    marginTop:5
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:10,
    marginLeft:15,
    marginRight:15

  },
  text: {
    fontSize: 16,
  },

  perT: {
       fontWeight:"bold",
       fontSize:35,
       marginLeft:15,
       textAlign: 'justify',
       lineHeight:35,
       justifyContent:"space-evenly",
     
  }

  
  
});

export default styles;
