import axios from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, Alert}  from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';
import apiconnection from '../apiconnection';



const LoginScreen = () => {

  const navigation = useNavigation();
  
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required('Email required'),
    password: Yup.string().min(8, ({min})=> `Password must be atleast ${min} characters`)
    .required("Password required")
  })

   const loginFormSubmit= async(values, action)=>{
    //console.log(values);
    
    try{
      const response = await apiconnection.post('/api/user/login',{
        email:values.email,
        password:values.password
      });
      if(response){
        //console.log(response)
        
        Alert.alert('Login Successful.....',
        ' Click Proceed to Continue', 
        [
          {text: 'Proceed', onPress:() => navigation.navigate('Dashboard')
        }] )
        
      }
    }
    catch(e){
      console.log(e);
    }
  }
  

   return (
   <View>
    
      <Formik
    initialValues={{email:'',password:''}}
    validateOnMount={true}
    validationSchema={loginValidationSchema }
    onSubmit={values=> loginFormSubmit(values)}
    >
        {
          ({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid})=>(
              <View style={styles.container}>
        <View>
          <Image
          style={styles.loginlogo}
          source={require("../assets/logo.png")}
          />
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            Login
          </Text>
        </View>
        
        <View style={styles.form}>
        
        <View style={styles.usercontainer}>
          <TextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}          
          placeholder='E-mail'
          style={styles.useremail}
          placeholderTextColor="white"       
          />
          {
            (errors.email && touched.email) && 
            <Text style={styles.errors}>{errors.email} </Text>
          }
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          value={values.password}
          onBlur={handleBlur("password")}
          placeholder='Password'
          style={styles.useremail}
          placeholderTextColor="white"
          onChangeText={handleChange("password")}
          secureTextEntry
          />
          {
            (errors.password && touched.password) && 
            <Text style={styles.errors}>{errors.password} </Text>
          }
        </View>

        {
          /*
          <View style={styles.linkcontainer}>
          <TouchableOpacity>
            <Text style={styles.linktext}>
              Forget Password : Reset
            </Text>
          </TouchableOpacity>
        </View>
        */
        }

        <View style={styles.button}>
          <Button
          title='Login'
          color="#1A82A1"    
          onPress={handleSubmit}      
          />
        </View>

        <TouchableOpacity style={styles.newcontainer}
        onPress={()=> navigation.navigate("Register")}
        >
          <Text style={styles.newtext}          
          >
            New User
          </Text>
        </TouchableOpacity>
         
        </View>
    </View>     
            )
          
        }
    </Formik>
   </View>
  )
}


const styles = StyleSheet.create({
  newcontainer:{
    marginTop:50,
    width:300,
    alignItems:'center',
    height:50,
    justifyContent:'center',
    backgroundColor:'#437D7A'
  },
  newtext:{
    fontSize:20,
    fontWeight:'200',
    color:'white'
  },
  linktext:{
    fontSize:20,
    //paddingTop:10,
    marginTop:20,
    //paddingBottom:20,
    color:'white'
  },
  buttonstyle:{
    width:100
  },  
  container:{
    //marginTop:25,
    //paddingTop:50,
    backgroundColor:"#038bae",
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:100
  },
  form:{
    height:500,
    width:400,
    alignItems:'center',
    //justifyContent:'center',
   // marginBottom:-20
  },
  loginlogo:{
    width:330,
    height:330,
    resizeMode:'contain'
  },
  usercontainer:{
    borderBottomWidth:2,
    width:350,
    borderColor:'white',
    marginTop:50,
    paddingBottom:15
   
  },
  useremail:{    
    fontSize:20,
      
  },
  header:{
    marginTop:-120,
  },
  headerText:{
    fontSize:50,
    fontWeight:'300',
    color:'white'
  },
  button:{
    marginTop:40,
    width:300,
    //fontWeight:'bold'
    
  },
  errors:{
    fontSize:14,
    color:'red',
    fontWeight:'bold',
    marginTop:5
  }
  
})

export default LoginScreen;

