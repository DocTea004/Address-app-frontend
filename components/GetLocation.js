import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function GetLocation(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState('unknown');
  const [currentLongitude, setCurrentLongitude] = useState('unknown');
  const [watchID, setWatchID] = useState('');

  const [initialRegion, setInitialRegion] = useState({
    latitude:  5.6049705,
    longitude:-0.1745796,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008
})

    const [mapWidth, setMapWidth] = useState('99%');
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      navigator.geolocation.getCurrentPosition(
          (position)=>{
              currentLatitude = JSON.stringify(position.coords.latitude);
              currentLongitude = JSON.stringify(position.coords.longitude);
          },
          setInitialRegion={
              latitude:currentLatitude,
              longitude:currentLongitude,
              latitudeDelta:0.005,
              longitudeDelta:0.005
          },
          error=> alert(error.message),
          {enableHighAccuracy:true, timeout: 20000, maximumAge: 1000}
      );

      watchID = navigator.geolocation.watchPosition(
          (position) =>{
            currentLatitude = JSON.stringify(JSON.stringify(position.coords.latitude));
            currentLongitude = JSON.stringify(JSON.stringify(position.coords.longitude));
          }
      )

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }

  


  return (
    <SafeAreaView>
            <MapView
            style={styles.map}
            region={{
                latitude:currentLatitude,
                longitude:currentLongitude,
                latitudeDelta:0.005,
                longitudeDelta:0.005

            }}
            //region={props.region}
            key=""
            initialRegion={initialRegion}
            loadingEnabled={true}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            /*onRegionChange={
                (reg)=> props.onRegionChange(reg)
            }*/
            >
                <Marker
                coordinate={initialRegion}
                //coordinate = {props.region}
                title="Current Location"
                description='my current '
                />

            </MapView>
    
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
  });
