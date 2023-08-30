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
    TextInput,
    Pressable
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';



type RootStackParamList = {
    CustomerInfo: undefined
    ShortCodes: undefined
    Statement: undefined
    
};

type StatementNavigationProp = StackNavigationProp<RootStackParamList, 'Statement'>

type StatementProps = {
    navigation: StatementNavigationProp;
    route: RouteProp<RootStackParamList, 'Statement'>;
};

function Statement({ navigation, route }: StatementProps): JSX.Element {


    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            {/* <Image
                style={styles.logo}
                source={require('../../assets/Redux.png')}
            /> */}
            <TextInput style= {{height: 60, width: 415, paddingLeft: 20, color:'#000000',backgroundColor: '#23557F',paddingTop: 30, fontSize: 20, marginTop: 0, marginLeft: -0, borderRadius: 0
         }}> <Text style={styles.welcome}>Welcome        oonimole                           Logout</Text>  
         
         </TextInput>
            <Text style= {styles.statement}>Statement</Text>
            <Text style= {styles.time}>Time Frame</Text>
            <TextInput style= {{height: 38, width: 120, color:'#000000',backgroundColor: '#23557F',paddingLeft: 0,paddingTop: 0, fontSize: 20, marginTop: 15, marginLeft: -270, borderRadius: 10
         }}>   Last month</TextInput>
           <TextInput style= {{height: 38, width: 120, color:'#000000',backgroundColor: '#23557F',paddingLeft: 0,paddingTop: 0, fontSize: 20, marginTop: -40, marginLeft: -0, borderRadius: 10
         }}>   Last month</TextInput>
          <TextInput style= {{height: 38, width: 120, color:'#000000',backgroundColor: '#23557F',paddingLeft: 0,paddingTop: 0, fontSize: 20, marginTop: -40, marginLeft: 270, borderRadius: 10
         }}>   Last month</TextInput>
          <TextInput style= {{height: 50, width: 390, color:'#000000',backgroundColor: '#23557F',paddingLeft: 20,paddingTop: 8, fontSize: 20, marginTop: 60, marginLeft: 0, borderRadius: 10
         }}>Start Date</TextInput>
         <TextInput style= {{height: 50, width: 390, color:'#000000',backgroundColor: '#23557F',paddingLeft: 20,paddingTop: 8, fontSize: 20, marginTop: 2, marginLeft: 0, borderRadius: 10
         }}>End Date</TextInput>
         <Text style= {styles.account}>Account Number</Text>
          <TextInput style= {{height: 50, width: 390, color:'#000000',backgroundColor: '#23557F',paddingLeft: 20,paddingTop: 8, fontSize: 20, marginTop: 10, marginLeft: 0, borderRadius: 10
         }}></TextInput>
         <Text style= {styles.Email}>Email</Text>
         <TextInput style= {{height: 50, width: 390, color:'#000000',backgroundColor: '#23557F',paddingLeft: 20,paddingTop: 8, fontSize: 20, marginTop: 10, marginLeft: 0, borderRadius: 10
         }}></TextInput>
    
         <Pressable style= {styles.submit}>
            <Text style= {{fontSize: 23, color:'#000000' }}>Send Statement</Text>
         </Pressable>
         
        </View>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome:{
        fontSize: 18,
        paddingTop: 50,
        paddingLeft: 10,
        marginLeft: 30,
        color: '#fffffF',

    },
    statement:{
        fontSize: 25,
        marginLeft: 10,
        color: '#23557F',
    },
    time:{
        fontSize: 25,
        marginTop: 10,
        marginLeft: -260,
        color: '#000000',
    },
    account:{
        fontSize: 25,
        marginTop: 30,
        marginLeft: -200,
        color: '#000000',
    },
    Email:{
        fontSize: 25,
        marginTop: 0,
        marginLeft: -310,
        color: '#000000',
    },
    submit:{
        backgroundColor: '#23557F',
        width: 390,
        height: 50,
        borderRadius: 15,
        paddingLeft: 120,
        paddingTop: 5,
        marginTop: 30,
        marginLeft: 0,
        color: '#000000',
    }
  
});

export default Statement;