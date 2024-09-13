import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Linking,} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
<<<<<<< HEAD
import {OtpInput} from 'react-native-otp-entry';
=======
// import PhoneInput from "react-native-phone-number-input";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
//import React, { useState, useRef } from "react";
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
<<<<<<< HEAD
         backgroundColor: '#fff'
=======
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
<<<<<<< HEAD
=======
      <View style={styles.header}>
        <Text style={styles.logo}><Text style={{color:'#2882fb'}}>D</Text><Text style={{color:'#66d069'}}>iggaj</Text> <Text style={{color:'#f66059'}}>C</Text>oder</Text>
        <View style={{paddingLeft:0, marginLeft:-17, marginRight:12}}><MaterialIcons name="keyboard-arrow-up" size={29} color="black" /></View>
        <TouchableOpacity style={{ backgroundColor:'#2e80f7', alignItems: "center", justifyContent: "center",
         borderRadius: 9 }}><Text style={{color:'white',margin:3,fontSize:14, padding:5}}> Sign in / Log in </Text></TouchableOpacity>
      </View>
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c
      <View>
        <View>
        </View>
      <Image source={require('./../assets/images/img.png')}
        style={{
          width:'100%',
<<<<<<< HEAD
          height:408,
=======
          height:300,
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c
          alignItems:"center",
          justifyContent:"center",
          marginTop:-10
        }}
      />
      </View>
      <View style={{marginLeft:25}}>
      <Text style={{
          fontSize:23,
          fontWeight:"bold",
          marginTop:27,
          marginBottom:17
        }}>
<<<<<<< HEAD
        <Text style={{fontSize:32}}><Text>Join </Text><Text style={{color:'#2882fb'}}>D</Text><Text style={{color:'#66d069'}}>iggaj</Text> <Text style={{color:'#f66059'}}>C</Text>oder</Text></Text>
        <Text style={{color:'#696969',fontSize:16.5, marginBottom:-8}}>SMS sent to 9625967933</Text>
        {/* <PhoneInput country={"in"}/> */}
        <OtpInput 
          numberOfDigits={6}
          onTextChange={(text)=>console.log(text)}
          focusColor="black"
          theme={{
            pinCodeContainerStyle:{
              backgroundColor: '#eff4f8',
              width: 52,
              height: 54,
              borderRadius: 9,
              marginTop:37,
              marginBottom: 12,
              marginHorizontal: -12,
              marginRight:18
            }
          }}
        />
        <Text style={{color:'#696969', marginBottom:15, fontSize:16.5, marginTop:10}}>Resend OTP in 45 seconds</Text>
        <View style={{flexDirection:'row', gap:15}}>
        <TouchableOpacity style={styles.resendButton}><Text style={{fontSize:16}}>Resend</Text></TouchableOpacity>
        <TouchableOpacity style={styles.verifyButton}><Text style={{fontSize:16, color:'white'}}>Verify OTP</Text></TouchableOpacity>
        </View>
=======
        <Text style={{fontSize:27}}><Text>Join </Text> <Text style={{color:'#2882fb'}}>D</Text><Text style={{color:'#66d069'}}>iggaj</Text> <Text style={{color:'#f66059'}}>C</Text>oder</Text></Text>
        <Text style={{color:'#696969',fontSize:16, marginTop:-3}}>Already have an account?<Text style={{color:'black', textDecorationLine: 'underline'}}> Log in</Text></Text>
        {/* <PhoneInput country={"in"}/> */}
        <TextInput placeholder="Enter your mobile number" style={styles.input}/>
        <Text style={{color:'#696969', marginBottom:17}}>We'll send an OTP for verification.</Text>
        <TouchableOpacity style={styles.button}><Text style={{color:"white", fontSize:15}}>Request OTP</Text></TouchableOpacity>
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c
        <Text style={{color: "#696969"}}>By signing up, you agree to <TouchableOpacity onPress={()=> Linking.openURL("https://www.diggajcoder.com/terms")}><Text style={{color: "black",marginBottom:-4.2}}>Terms & Conditions </Text></TouchableOpacity>and <TouchableOpacity onPress={() => Linking.openURL("https://www.diggajcoder.com/policy")}><Text style={{color:"black"}}>Privacy Policy.</Text></TouchableOpacity></Text>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding:23,
    paddingLeft:5,
    flexDirection:'row',
    gap:36
  },
  input:{
    padding:10,
    borderColor: '#ccc', 
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
    width:340,
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 10
  },
  logo:{
    fontSize:27,
    fontWeight:"bold",
    flexDirection:'row',
    marginLeft:5
  },
<<<<<<< HEAD
  resendButton:{
    width:125,
    padding:15,
    marginTop:15,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   marginBottom:35,
   borderColor: '#000',
   borderWidth: 1
  },
  verifyButton:{
    width:125,
    padding:15,
    marginTop:15,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   marginBottom:35,
   borderColor: '#000',
   borderWidth: 1,
    backgroundColor:'#3b5168'
=======
  button:{
    backgroundColor:"#54687b",
    width:340,
    padding:15,
    marginTop:17,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   marginBottom:38
>>>>>>> a069009486ff02189c3ae1a11cab31703d12065c
  }
})