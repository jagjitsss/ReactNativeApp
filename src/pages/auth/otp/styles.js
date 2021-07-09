import { StyleSheet, Dimensions } from 'react-native';

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
        padding: 0,
        marginTop:30,
        marginLeft:18,
        marginRight:15
    
    },
    containerTop:{
      borderRadius:20,
      marginTop:50
     
    },
    title_:{
          textAlign:"center",
          marginTop:10,
          color:"#6B6B6B",
    },  
    label:{
       color:"#6B6B6B",
       fontSize:15,
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
        marginLeft:15,
        height:60,
        borderRadius:15,
        padding:12,
        //position:"absolute", 
        bottom:0,
        alignSelf:"center",
        marginTop:40
        
    },
    btnText: {
        fontSize: 20,
        color: '#000',
        marginTop: 5,
        textAlign:"center"
        
    },
    root: {flex: 1, padding: 20},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderColor: '#FFCC4E',
        textAlign: 'center',
        overflow: 'hidden'
    },
    focusCell: {
        borderColor: '#000',
    },
  
});

export default styles;
