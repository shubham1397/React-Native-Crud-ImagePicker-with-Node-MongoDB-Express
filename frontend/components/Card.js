import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Card = props =>{

    return(
    <View style={{ ...style.card, ...props.style }}>{props.children}</View>
    );
};


const style= StyleSheet.create({


    card:{
        flexDirection:'row',
        width:'80%',
        height:80,
        shadowColor:'red',
        alignItems:'center',
        justifyContent:'space-around',
        padding:25,
        marginHorizontal:15,
        marginVertical:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        // shadowRadius:6,
        shadowOpacity:0.26,
        elevation:5,
        borderRadius:10
      },

})


export default Card;