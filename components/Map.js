
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export const Map = () => {

  const [position, setPosition] = useState({
    latitude:10,
    longitude:10,
    latitudeDelta:0.001,
    longitudeDelta:0.001
  });

  useEffect(()=>{

    Geolocation.getCurrentPosition((pos)=>{
      const crd = pos.coords;
      setPosition({
        latitude:crd.latitude,
        longitude:crd.longitude,
        latitudeDelta:0.0421,
        longitudeDelta:0.0421
      });
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <MapView 
    style={styles.map}
    initialRegion={position}
    showsUserLocation={true}
    showsMyLocationButton={true}
    followsUserLocation={true}
    showsCompass={true}
    scrollEnabled={true}
    zoomEnabled={true}
    pitchEnabled={true}
    rotateEnabled={true}

    >
      <Marker
      title='Current Location'
      description='This is my current Location'
      coordinate={position}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height:400,
    width:400,
    justifyContent:'flex-end',
    alignItems:'center'
  },
});




export default Map;


//+0244722888