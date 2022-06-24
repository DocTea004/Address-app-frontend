import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet,Text,Button, TouchableOpacity}  from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import apiconnection from '../apiconnection';
import MenuBar from '../components/MenuBar';

const Dashboard = () => {
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
      
             <View style={styles.menuContainer}>
                <MenuBar    />
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
           <View style={styles.buttoncontainer}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('SearchLocation')}
            >
              <Text style={styles.searchText}>
                Search Location
              </Text>
            </TouchableOpacity>
           </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container:{
      //alignItems:'center'
      
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
  firstContainer:{

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
  buttoncontainer:{
    //width:200,
    //height:100,
    //marginTop:50
    alignItems:'center',
    marginTop:20,
    backgroundColor:"#7CA0A4",
    //justifyContent:'center'
    marginLeft:70,
    marginRight:70,
    padding:5
  },
  menuContainer:{

  },
  searchContainer:{
      marginTop:20,
      marginLeft:20,
      marginRight:20
  },
  mapContainer:{
     marginTop:70,
     marginLeft:0
  },
  map:{
      width:430,
      height:400
  },
  listingContainer:{
      marginTop:20,
      marginBottom:20
  },
  searchText:{
    fontSize:20,
    color:'white'
  }
})

export default Dashboard;