import React from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';

const Btn = props =>{
    return(
        <View style={{...props.style, ...style.btnContainer}}>
                <Button style={style.btn} title={props.title}  color={props.color} onPress={props.onPress}/>
        </View>
    )
}

const style= StyleSheet.create({
    btnContainer:{
        marginTop:10,
        borderRadius:20
    },
    btn:{
        borderRadius:20,
    }
})

export default Btn;