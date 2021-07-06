import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({


    img:{
    // height:350,
     width:"100%"
    },  
    bgImg:{
          width:"100%",
        resizeMode:"stretch",
        position:"absolute",
        top:"45%"
    },
    container: {
        padding: 0,
        marginTop:30,
        marginLeft:18,
        marginRight:15
    
    },
    containerTop:{
      borderRadius:20,
      position:'relative',
      bottom:"10%"
    },

    label:{
       color:"#6B6B6B",
       fontSize:15,
       textTransform:"uppercase"
    }, 
    textTitle: {
        marginLeft: 15,
        marginBottom:0,
        marginTop:20,
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        letterSpacing:1
        
    },
    smalltextTitle: {
        marginLeft: 15,
        marginBottom:0,
        marginTop:20,
        color: "#000",
        fontSize: 22,
        fontWeight: "normal",
        textAlign: "left",
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
        bottom:0,
        alignSelf:"center",
        marginTop:40
        
    },
    btnText: {
        fontSize: 20,
        color: '#000',
        marginTop: 2,
        textAlign:"center"
    },
  
});

export default styles;
