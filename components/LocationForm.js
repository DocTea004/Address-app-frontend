import React from 'react';
import { ViewBase, View, StyleSheet, Text, Button, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LocationForm = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
         <View style={styles.form}>
        
        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Zip Code'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Name of Location'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Email'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Personal Name'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Country'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='State / Region'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='City'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Town / Village'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Address (Street, House No)'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Land Mark'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Phone No'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Web Address'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>

        <View style={styles.usercontainer}>
          <TextInput
          placeholder='Listing Category'
          style={styles.useremail}
          placeholderTextColor="white"
          />
        </View>       

        

        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({  
    container:{
      //marginTop:25,
      //paddingTop:50,
      backgroundColor:"#038bae",
      alignItems:'center',
      justifyContent:'center',
      //paddingBottom:500
    },
    form:{
      //height:500,
      //width:400,
      alignItems:'center',
      //justifyContent:'center'
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
   
    button:{
      //marginTop:20,
      //width:300,
      //fontWeight:'bold'
    }
    
  })

export default LocationForm