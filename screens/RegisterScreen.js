import axios from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, Alert}  from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import apiconnection from '../apiconnection';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {

  const navigation = useNavigation();
  
  const registerValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name required'),
    lastName: Yup.string().required('Last Name required'),
    username: Yup.string().required('Username required'),
    email: Yup.string().email("Please enter valid email").required('Email required'),
    //email: Yup.string().email("Please enter valid email").required('Email required'),
    password: Yup.string().min(8, ({min})=> `Password must be atleast ${min} characters`)
    .required("Password required")
  });

  const RegistrationFormSubmit= async(values, action)=>{
    //console.log(values);
    
    try{
      const response = await apiconnection.post('/api/user/register',{
        firstName: values.firstName,
        lastName: values.lastName,
        username : values.username,
        email : values.email,        
        password : values.password,
        
      });
      if(response){
        Alert.alert("User account created Successfully Succesfully.....!",
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
   <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.loginlogo}
        source={require("../assets/logo.png")}
          />
    </View>

    <View style={styles.header}>
      <Text style={styles.headerText}>
        Sign - Up Account
      </Text>
    </View>
     <ScrollView
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
     >
    <Formik
  initialValues={{firstName:'',lastName:'',username:'',email:'',password:''}}
  validateOnMount={true}
  validationSchema={registerValidationSchema }
  onSubmit={values=> RegistrationFormSubmit(values)}
  >
      {
        ({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid})=>(
      
        <View>      
          <View style={styles.form}>

          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("firstName")}
            //onChange={setUser({...user, firstName:values.firstName})}
            onBlur={handleBlur("firstName")}
            value={values.firstName}          
            placeholder='First Name'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.firstName && touched.firstName) && 
              <Text style={styles.errors}>{errors.firstName} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            //onChangeText={setUser({...user,lastName:values.lastName})}
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}          
            placeholder='Last Name'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.lastName && touched.lastName) && 
              <Text style={styles.errors}>{errors.lastName} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}          
            placeholder='Username'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.username && touched.username) && 
              <Text style={styles.errors}>{errors.username} </Text>
            }
          </View>

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
            title='Register'
            color="#1A82A1"    
            onPress={handleSubmit}      
            />
          </View>

          {
            /*
            <TouchableOpacity style={styles.newcontainer}
          //ronPress={()=> navigation.navigate("Register")}
          >
            <Text style={styles.newtext}          
            >
              New User
            </Text>
          </TouchableOpacity>
          */
          }
          
          </View>
        </View>     
      
          )
        
      }
    </Formik>
     </ScrollView>
   </View>
  )
}


const styles = StyleSheet.create({
  container:{
    //marginTop:50,
    //width:300,
    alignItems:'center',
    //height:50,
    //justifyContent:'center',
    backgroundColor:'#038bae',
    paddingBottom:150
  },
  loginlogo:{
    width:100,
    height:100,
    resizeMode:'contain'
  },
  usercontainer:{
    borderBottomWidth:2,
    width:350,
    borderColor:'white',
    marginTop:50,
    paddingBottom:10
   
  },
  errors:{
    fontSize:14,
    color:'red',
    fontWeight:'bold',
    marginTop:5
  },
  button:{
    marginTop:30,
    paddingBottom:100,
    //width:300,
    //alignItems:'center'
    //fontWeight:'bold'
  },
  headerText:{
    fontSize:20,
    fontWeight:'600',
    color:'white'
  },
  header:{
    //marginTop:-120,
    alignItems:'center'
  },
  logoContainer:{
    alignItems:'center'
  }
})

export default RegistrationScreen;

