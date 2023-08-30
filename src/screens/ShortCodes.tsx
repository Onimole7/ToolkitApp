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



type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Login: undefined
    CustomerComplaint: undefined
    Statement: undefined
    Sent: undefined

};

type ShortCodesNavigationProp = StackNavigationProp<RootStackParamList, 'ShortCodes'>

type ShortCodesProps = {
    navigation: ShortCodesNavigationProp;
    route: RouteProp<RootStackParamList, 'ShortCodes'>;
    
};

function ShortCodes({ navigation, route }: ShortCodesProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
          
            <Text style={styles.sub}>USSD Short Code</Text>
            <Text style={styles.content}> -   USSD Code - *326#</Text>
            <Text style={{...styles.content, marginLeft: -25, }}> -   Airtime Quick Recharge - *326*Amount#</Text>
            <Text style={{...styles.content, marginLeft: -110, }}> -   Third Party Airtime Recharge - </Text>
            <Text style={{...styles.content, marginLeft: 35, }}> *326*Amount*Phone Number#</Text>
            <Text style={{...styles.content, marginLeft: -125, }}> -   Balance Checking - *326*0#</Text>
            <Text style={{...styles.content, marginLeft: -55, }}> -   NIP Transfer Domestic Quick String -</Text>
            <Text style={{...styles.content, marginLeft: 15, }}> *326*Amount*Acct Number#</Text>
            <Text style={{...styles.content, marginLeft: -190, }}> -   Interbank Transfer - </Text>
            <Text style={{...styles.content, marginLeft: 60, }}> *326*2*Amt*Beneficiary Acct No#</Text>
            <Text style={{...styles.content, marginLeft: -75, }}> -   Xpress Cash E-token Generation - </Text>
            <Text style={{...styles.content, marginLeft: -55, }}>*326*7*Amount*1#</Text>
            <Text style={{...styles.content, marginLeft: -240, }}>   -   BVN - *565*0#</Text>
        
            
            
            
            
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    // container:{
    //     color: 'white',
    //     fontSize: 15,
    //     textAlign: 'left',
    //     paddingTop: 20,

    // },
    sub:{
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: '#23557F',
        marginTop: 20,
        marginBottom: 30,

    },
    content:{
        flex: 1,  
        fontSize: 18,
        marginLeft: -200,
        color: '#23557F',
        textAlign: 'left',
        marginTop: -150,
    },

});

export default ShortCodes;