import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text,Button, Image}  from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';



const AddressDashboard = () => {
  const [data, setData]= useState([]);
  const navigation = useNavigation();
  const [loading,setLoading] = useState(true);

  /*
  const getData = async() => {
    try{
      const response = await apiconnection.get('/api/address');
      setData(response);
      setLoading(false);
      console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }
  */
  
  useEffect(()=>{
    //getData();
    fetch("http://192.168.83.141:8800/api/address")
    .then((response)=>response.json())
    .then((json)=>setData(json))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  },[])
  
  return (
    <View style= {styles.container}>
      
                
        <View style={styles.logoContainer}>
        <Image
        source={require('../assets/logoblue.png')}
        style={styles.logoStyle}
        />     
        </View>
        <View style={styles.headContainer}>
        <Text style={styles.headText}>
            Registered Addresses
        </Text>  
        </View>
        
        <ScrollView>
        <View style={styles.addressContainer}>
                {
                  loading ? (<Text>Loading..........</Text>) 
                  : (
                    data.map((post,key)=>(
                      <View
                      style={styles.parentContainer} 
                      key={post._id}
                      tyle={styles.dataContainer}>
                        <View style={styles.firstContainer}>
                        <Text style={styles.companyName}>{post.CompanyName} </Text>
                        </View>

                        <View style={styles.subContainer}>
                        <Text style={styles.subText}>{post.LocationName} </Text>
                        <Text style={styles.subText}>{post.Country} </Text>
                        <Text style={styles.subText}>{post.RegionState} </Text>
                        <Text style={styles.subText}>{post.TownVillage} </Text>
                        <Text style={styles.subText}>{post.CompanyAddress} </Text>
                        </View>
                      </View>
                    ))
                  )
                }
        </View>
        </ScrollView>
            
</View>
  )
}

const styles = StyleSheet.create({

    container:{
        alignItems:'center'
    },
    logoStyle:{
        width:300,
        resizeMode:'contain'
    },
    headText:{
        fontSize:20,
        color:'green'
    },
    headContainer:{
        alignItems:'center'
    },
    parentContainer:{
        marginTop:5,
        marginLeft:15,
        marginRight:15
    },
    addressContainer:{
        marginTop:10,
        borderTopWidth:2,
        borderColor:'#1a83ad',
    },
    subText:{
        paddingLeft:2
    },
    companyName:{
        fontSize:24,
        color:'#1a83ad'
    },
    dataContainer:{
        
    },
    subContainer:{
        flexDirection:'row',
        //borderRightWidth:2
        backgroundColor:'#cecfd1'
    },
    
  
})

export default AddressDashboard;