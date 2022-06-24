import axios from 'axios';
import { Formik } from 'formik';
import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, Alert}  from "react-native";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import apiconnection from '../apiconnection';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';

const RegistrationLocation = () => {

  const navigation = useNavigation();
  
  const locationValidationSchema = Yup.object().shape({
    CompanyName: Yup.string().required('First Name required'),
    LocationName: Yup.string().required('First Name required'),
    ZipCode : Yup.string().required('First Name required'),
    PhoneNumber : Yup.string().required('First Name required'),
    Email : Yup.string().email("Please enter valid email").required('Email required'),
    Country : Yup.string().required('First Name required'),
    RegionState : Yup.string().required('First Name required'),
    TownVillage : Yup.string().required('First Name required'),
    CompanyAddress : Yup.string().required('First Name required'),
    LandMark : Yup.string().required('First Name required'),
    WebAddress : Yup.string().required('First Name required'),
    ListingCategory : Yup.string().required('First Name required'),
    //Logo : Yup.string().required('First Name required'),
  })

  const LocationFormSubmit= async(values, action)=>{
    //console.log(values);
    
    try{
      const response = await apiconnection.post('/api/address/register',{
        CompanyName: values.CompanyName,
        LocationName: values.LocationName,
        ZipCode : values.ZipCode,
        PhoneNumber : values.PhoneNumber,
        Email : values.Email,
        Country : values.Country,
        RegionState : values.RegionState,
        TownVillage : values.TownVillage,
        CompanyAddress : values.CompanyAddress,
        LandMark : values.LandMark,
        WebAddress : values.WebAddress,
        ListingCategory : values.ListingCategory,
        //Logo : values.Logo
      });
      if(response){
        Alert.alert("Company's Address registered Succesfully.....!",
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
     <ScrollView
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
     >
      <View style={styles.logoContainer}>
      <Image
        style={styles.loginlogo}
        source={require("../assets/logo.png")}
          />
    </View>

    <View style={styles.header}>
      <Text style={styles.headerText}>
        Register Location
      </Text>
    </View>

    <Formik
  initialValues={{CompanyName:'',LocationName:'',ZipCode:'',PhoneNumber:'',Email:'',Country:'',RegionState:'',TownVillage:'',CompanyAddress:'',LandMark:'',WebAddress:'',ListingCategory:'',Logo:''}}
  validateOnMount={true}
  validationSchema={locationValidationSchema }
  onSubmit={values=> LocationFormSubmit(values)}
  >
      {
        ({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid})=>(
      
        <View>      
          <View style={styles.form}>

          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("CompanyName")}
            onBlur={handleBlur("CompanyName")}
            value={values.CompanyName}          
            placeholder='Name of Company'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.CompanyName && touched.CompanyName) && 
              <Text style={styles.errors}>{errors.CompanyName} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("LocationName")}
            onBlur={handleBlur("LocationName")}
            value={values.LocationName}          
            placeholder="Company's Location"
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.LocationName && touched.LocationName) && 
              <Text style={styles.errors}>{errors.LocationName} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("ZipCode")}
            onBlur={handleBlur("ZipCode")}
            value={values.ZipCode}          
            placeholder='ZipCode'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.ZipCode && touched.ZipCode) && 
              <Text style={styles.errors}>{errors.ZipCode} </Text>
            }
          </View>
          
          <View style={styles.usercontainer}>
            <TextInput
            onChangeText={handleChange("PhoneNumber")}
            onBlur={handleBlur("PhoneNumber")}
            value={values.PhoneNumber}          
            placeholder='Phone Number'
            style={styles.useremail}
            placeholderTextColor="white"       
            />
            {
              (errors.PhoneNumber && touched.PhoneNumber) && 
              <Text style={styles.errors}>{errors.PhoneNumber} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.Email}
            onBlur={handleBlur("Email")}
            placeholder='Email'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("Email")}
            />
            {
              (errors.Email && touched.Email) && 
              <Text style={styles.errors}>{errors.Email} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.Country}
            onBlur={handleBlur("Country")}
            placeholder='Country'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("Country")}        
            />
            {
              (errors.Country && touched.Country) && 
              <Text style={styles.errors}>{errors.Country} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.RegionState}
            onBlur={handleBlur("RegionState")}
            placeholder='Region or State'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("RegionState")}
            />
            {
              (errors.RegionState && touched.RegionState) && 
              <Text style={styles.errors}>{errors.RegionState} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.TownVillage}
            onBlur={handleBlur("TownVillage")}
            placeholder='Town or Village'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("TownVillage")}
            />
            {
              (errors.TownVillage && touched.TownVillage) && 
              <Text style={styles.errors}>{errors.TownVillage} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.CompanyAddress}
            onBlur={handleBlur("CompanyAddress")}
            placeholder='Company Address'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("CompanyAddress")}
            />
            {
              (errors.CompanyAddress && touched.CompanyAddress) && 
              <Text style={styles.errors}>{errors.CompanyAddress} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.LandMark}
            onBlur={handleBlur("LandMark")}
            placeholder='LandMark'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("LandMark")}
            />
            {
              (errors.LandMark && touched.LandMark) && 
              <Text style={styles.errors}>{errors.LandMark} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.WebAddress}
            onBlur={handleBlur("WebAddress")}
            placeholder='Web Address'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("WebAddress")}
            />
            {
              (errors.WebAddress && touched.WebAddress) && 
              <Text style={styles.errors}>{errors.WebAddress} </Text>
            }
          </View>

          <View style={styles.usercontainer}>
            <TextInput
            value={values.ListingCategory}
            onBlur={handleBlur("ListingCategory")}
            placeholder='Listing Category'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("ListingCategory")}
            />
            {
              (errors.ListingCategory && touched.ListingCategory) && 
              <Text style={styles.errors}>{errors.ListingCategory} </Text>
            }
          </View>
          {
            /*
            <View style={styles.usercontainer}>
            <TextInput
            value={values.Logo}
            onBlur={handleBlur("Logo")}
            placeholder='Logo'
            style={styles.useremail}
            placeholderTextColor="white"
            onChangeText={handleChange("Logo")}
            />
            {
              (errors.Logo && touched.Logo) && 
              <Text style={styles.errors}>{errors.Logo} </Text>
            }
          </View>

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
    paddingBottom:15
   
  },
  errors:{
    fontSize:14,
    color:'red',
    fontWeight:'bold',
    marginTop:5
  },
  button:{
    marginTop:30,
    paddingBottom:30,
    //width:300,
    //alignItems:'center'
    //fontWeight:'bold'
  },
  headerText:{
    fontSize:20,
    fontWeight:'300',
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

export default RegistrationLocation;

