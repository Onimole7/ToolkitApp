/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */

import React, { useEffect, useState } from 'react';
import {

    StyleSheet,
    Image,
    Text,
    View,
    Alert,
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';


import { RouteProp } from '@react-navigation/native';
import Globalstyle from '../utils/Globalstyle';
import { TextInput } from 'react-native-gesture-handler';

type RootStackParamList = {
    Login: undefined
    Home: undefined
};

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

type LoginProps = {
    navigation: LoginNavigationProp;
    route: RouteProp<RootStackParamList, 'Login'>;
};



function Login({ navigation, route }: LoginProps): JSX.Element {
    type LoginProp = {
        username: string;
        password: number;
    };


    useEffect(() => {
        // call your functions inside this body
    }, []);




    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../../assets/eco.png')}
            />
            <Text style={[styles.text, Globalstyle.CustomFontH]}>STAFF UTILITY APP</Text>

            <TextInput placeholder="Email" style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"/>
            <TextInput placeholder="Password" style={[styles.input, Globalstyle.CustomFontInput]} placeholderTextColor="#23557F"/>
            <TextInput editable={false} style= {{height: 60, width: 200, color:'#000000', backgroundColor: '#23557F',
            paddingLeft: 65, fontSize: 30, marginTop: 35, marginBottom: -10, 
            marginLeft: 5, borderRadius: 15}}>Login</TextInput>
            <Text style={styles.account}>Do not have an account?</Text>
            <Text style={styles.account}>contact administrator</Text>
            
        </View>
    );
}

/**
 * The top nav should have welcome USER and logout with logout icon.
 * The bott bvom nav should have four distinct navigation symbols linking to four direct pages for the USER quick access
 * Inputs for this page will be username and password to be sent over API.
 **/

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    logo: {
        width: 287,
        height: 140,
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        color: '#23557F',
        fontSize: 24,
        marginTop: -15,
    },
    input: {
        width: 300,
        borderWidth: 2,
        borderColor: '#23557F',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: 20,
        paddingLeft: 32,
        marginBottom: -5,
        marginTop: 55,
        
    },
    account:{
        color: '#23557F',
        fontSize: 16,
        marginTop: 35,
        marginBottom: -30,
    }
});

export default Login;