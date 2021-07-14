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
    top:40,
    right: 0,
    left:0
    
  },

  title1:{
    fontWeight:"bold",
    fontSize:20
  },





container: {
  flex: 1,
  marginTop:10,
  
},
listItem:{
  margin:10,
  padding:20,
  width:"100%",
  height:150,
  flex:1,
  alignSelf:"center",
  flexDirection:"row",

  justifyContent:"space-between",
  backgroundColor:"#fff"
},

container1: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //borderWidth:.2,
    //borderBottomColor:"#C5C6C8"
  },

  btnClickContain_right: {
    width:"92%",
    marginRight :10,
    backgroundColor: '#F0F0F0',
    marginLeft:15,
    marginRight:15,
    height:60,
    borderRadius:15,
    padding:0 ,
    alignItems:"center" ,
    justifyContent: 'center'
  },

  text: {
    marginLeft: 10,
    fontSize: 16,
  },

date:{
    marginTop:20,
    marginLeft:0
},

btnDelv:{
    backgroundColor:"#88F79A",
    height:30,
    width:80,
    padding:6,
    borderRadius:5,
    textAlign:"center",
    overflow:"hidden"
    
},

btnCanl:{
    backgroundColor:"#FC8B74",
    height:30,
    width:80,
    padding:6,
    borderRadius:5,
    textAlign:"center",
    overflow:"hidden"
    
}

 
});

export default styles;
