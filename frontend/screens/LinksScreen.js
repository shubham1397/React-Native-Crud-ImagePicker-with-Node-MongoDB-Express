
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid } from 'react-native';
import Btn from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function LinksScreen({navigation}, props) {

const [name, setName] = useState("");
const [designation, setDesignation] = useState("");


useEffect(() => {
  // getData();
  focusListener = navigation.addListener('focus', () => {
    setName("");
    setDesignation("");
  });

}, []);

const setNameText = Text =>{
  setName(Text);
}

const setDesiText = Text =>{
  setDesignation(Text);
}

const addData = (name,desi) =>{


    fetch("http://192.168.43.187:3000/crud/add", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method:'POST',
      body:JSON.stringify({
        name:name,
        designation:designation,
        path:'https://reactnative.dev/img/tiny_logo.png'
      }) 
    })
    .then((response)=> response.json())
    .then((json) => {
        console.log(json.success); 
        if(json.success === 1) {
          navigation.navigate('Home');
        }
      })
      .catch((error)=> console.log(error))

  
 }


  return (
    <View style={styles.container}> 

    <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}  placeholder="Enter Name"  value={name} onChangeText={setNameText}/>
            <TextInput style={styles.input} placeholder="Enter Designation" value={designation} onChangeText={setDesiText}/>
            <Btn style={styles.btn} title="Submit" color="black" onPress={()=>addData(name,designation)} />
        </View>
      </View>
  </View>
  );
}


const styles = StyleSheet.create({
  
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
  },
  modalContainer:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    width:'70%',

 },
  inputContainer:{
    marginTop:30,
    alignItems:'center'
  },
  input:{
    height:40,
    width:'90%',
    textAlign:'center',
    backgroundColor:'#fff',
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical:10,
    padding:10,
    margin:10
  },

});
