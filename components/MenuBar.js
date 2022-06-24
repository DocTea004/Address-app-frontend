import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MenuBar = ()=>{

    const navigation = useNavigation();

    return(
        <View style={styles.menuContainer}>

           <View style={styles.iconStyle}>
            <Feather
            name="menu"
            size={35}
            color="white"
            onPress={()=> navigation.navigate('Menu')}
            />
           </View>
           
           <View style={styles.logoContainer}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logoStyle}
            />
           </View>

           <View style={styles.linkContainer}>
           <View style={styles.registerStyle}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Location')}
            >
                <Text style={styles.registerLink}>
                    Register
                </Text>
                <Text style={styles.registerLink}>
                    Address
                </Text>
            </TouchableOpacity>
           </View>

           <View style={styles.addressStyle}>
           <TouchableOpacity
           onPress={()=> navigation.navigate('Address')}
           >
                <Text style={styles.registerLink}>
                    Addresses
                </Text>
               
            </TouchableOpacity>
           </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        marginTop:25,
        flexDirection:'row',
        backgroundColor:'#1a96d5',
        alignItems:'center',
        justifyContent:'space-between',
        paddingBottom:10,
        paddingTop:5
    },
    logoContainer:{

    },
    logoStyle:{
        width:150,
        height:50,
        resizeMode:'contain',
        borderWidth:5
    },
    linkContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    registerStyle:{
        //marginRight:5,
        borderWidth:2,
        borderColor:'white',
        padding:2
    },
    addressStyle:{
        paddingLeft:10,
        paddingRight:5
    },
    registerLink:{
        color:'white'
    }
})

export default MenuBar;

//0244722888