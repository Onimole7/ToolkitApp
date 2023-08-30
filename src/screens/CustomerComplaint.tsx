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
    // TextInput
} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
type RootStackParamList = {
    CustomerComplaint: undefined
};
type CustomerComplaintNavigationProp = StackNavigationProp<RootStackParamList, 'CustomerComplaint'>

type CustomerComplaintProps = {
    navigation: CustomerComplaintNavigationProp;
    route: RouteProp<RootStackParamList, 'CustomerComplaint'>;
};

function CustomerComplaint({ navigation, route }: CustomerComplaintProps): JSX.Element {

    useEffect(() => {
        //Call your function inside here
    }, []);

    return (
        <View style={styles.body}>
            <Text style={styles.text1}>Log Customer Complaints</Text>
            <View style={styles.body1}>
            <ScrollView style={styles.container}>    
            <Text style={styles.text}>To file a compliant or request, please provide
                us with the following information:</Text>
            <Text style={styles.name1}>Your name</Text>
            <Text style={styles.name}>Your email address</Text>
            <Text style={styles.name2}>Your phone number</Text>
            <TextInput style= {{...styles.textStyles, marginTop: -120 } }>Enter your name</TextInput>
          <TextInput style= {{...styles.textStyles, marginTop: 10}}>Enter your email address</TextInput>
          <TextInput style= {{...styles.textStyles, marginTop: 10}}>Enter your phone number</TextInput>
        <Text style={styles.name3}>A brief description of the Complaints or 
                request ?</Text>
            <TextInput style= {{height: 200, width: 350, backgroundColor: '#D9D9D9', borderWidth: 5, marginTop: 10, marginLeft: 30, borderRadius: 15
         }}></TextInput>
         <Text style={styles.name4}>Any relevant screenshots or files.</Text>         
         <TextInput style= {{height: 60, width: 180, color:'#000000',backgroundColor: '#23557F',paddingLeft: 30,paddingTop: 10, fontSize: 30, marginTop: 15, marginLeft: 100, borderRadius: 15
         }}>   Browse</TextInput>
        <Text style={styles.name5}>If you have any further questions, please do not hesitate to contact the support team.</Text>
        
        <TextInput editable={false} style= {{height: 60, width: 250, color:'#000000',backgroundColor: '#23557F'  ,paddingLeft: 80, fontSize: 30, marginTop: 15, marginLeft: 85, borderRadius: 15
         }}>Submit</TextInput>
         {/* <Button
            // title="Submit"
         >Submit</Button> */}
         </ScrollView>
        </View>
 </View>
       
         
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        fontSize: 10
    },
    body1: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        
    },
    text1:{
        fontSize: 25,
        marginLeft: 10,
        color: '#23557F',

    },
    text:{
        marginLeft: 10,
        fontSize: 20

    },
    name:{
        marginLeft: 10,
        marginTop: 20,
        fontSize: 20
    },
    name1:{
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20 
    },
    name2:{
        marginLeft: 10,
        marginTop: 20,
        fontSize: 20
    },
    name3:{
        marginLeft: 10,
        marginTop: 20,
        fontSize: 20
    },
    name4:{
        marginLeft: 10,
        marginTop: 30,
        fontSize: 20
    },
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    name5:{
        marginLeft: 10,
        marginTop: 30,
        marginBottom:10,
        fontSize: 20
    },
    textStyles: {
        height: 35, 
        width: 200, 
        backgroundColor: '#D9D9D9' ,
        flexWrap: 'wrap', 
        borderWidth: 2, 
        marginLeft: 190, 
        borderRadius: 5
    }

});

export default CustomerComplaint;