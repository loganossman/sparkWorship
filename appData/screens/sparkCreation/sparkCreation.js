import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

import { stylesPortrait } from "../../styles/portrait";
import colors from '../../../config/colors';

export default function SparkCreation({ navigation }) {
    return(
    <View style={stylesPortrait.container}>
        <View style={[sparkViewStyles.sparkViewTopBorder]}>
            <Text style={{textAlign:"center", fontSize:29, paddingTop: 28}}>Spark Worship</Text>
        </View>
        <View style={[sparkViewStyles.sparkContainer]}>
            <TextInput style={[sparkViewStyles.inputBox, sparkViewStyles.locationInputBox]}placeholder="Enter Location"></TextInput>
        </View>
        <View style={[sparkViewStyles.bottomContainer]}>
            <TouchableOpacity activeOpacity={1} style={[sparkViewStyles.testyTouchable]} onPress = {() => navigation.navigate("RegistrationScreen")}>
                <Text style={[stylesPortrait.centerText, sparkViewStyles.button]}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={[sparkViewStyles.testyTouchable]} onPress = {() => navigation.navigate("RegistrationScreen")}>
                <Text style={[stylesPortrait.centerText, sparkViewStyles.button]}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>  

    );
}

const sparkViewStyles = StyleSheet.create({
    sparkViewTopBorder:
    {
        height: "10%"
    },
    sparkViewContentContainer:
    {
        width: "100%",
        height: "100%",
    },
    sparkContainer:
    {
        width:"100%",
        height:"82%",
        backgroundColor: "rgba(255,255,255,1)",
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center"
    },
    sparkVerticalContainer:
    {
        width:"100%",
        height:"82%",
        backgroundColor: "rgba(255,255,255,1)",
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
    },
    veryTopBox:{
        marginTop: "5%",
        justifyContent: "center",
        backgroundColor: "#F1884F",
        height: "8%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    veryBottomBox:{
        marginBottom: "5%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    boxOne:
    {
        backgroundColor: "#F9CBB1",
        height: "16%",
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxTwo:
    {
        backgroundColor: "#F9CBB1",
        height: "16%",
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    boxText:{
        width: "58%", 
        marginLeft:"10%",
        marginTop: "2%",
        marginBottom: "2%",
    },
    bottomContainer:{
        width:"100%",
        height:"8%",
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center"
    },
    inputBox: {
        height: "7.5%",
        marginHorizontal: "10%",
        marginBottom: "10%",
        borderWidth: 0,
        borderColor: "black",
        backgroundColor: "#F9CBB1",
        paddingLeft: "1%",
        borderRadius: 8,
        textAlign: 'center',
        color: "white",
        width: "85%",
    },
    locationInputBox:{
        textAlign: 'left',
        paddingLeft: '2%',
        fontSize: 18
    },
    dateInputBox: {
        height: "10%",
        marginHorizontal: "2%",
        borderWidth: 0,
        borderColor: "black",
        paddingHorizontal: "1%",
        fontSize: 24,
        borderRadius: 8,
        textAlign: 'center',
        color: "black",
        width: "100%",
        alignContent: "center"
    },
    minuteInputBox:{
        height: "10%",
        marginHorizontal: "2%",
        borderWidth: 0,
        borderColor: "black",
        paddingHorizontal: "1%",
        fontSize: 36,
        borderRadius: 8,
        textAlign: 'center',
        color: "black",
        width: "15%",
        alignContent: "center"
    },
    hourInputBox:{
        height: "10%",
        marginHorizontal: "2%",
        borderWidth: 0,
        borderColor: "black",
        paddingHorizontal: "1%",
        fontSize: 36,
        borderRadius: 8,
        textAlign: 'center',
        color: "black",
        width: "15%",
        alignContent:"flex-end",
        justifyContent:"flex-end"
    },
    dateInputContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "1%",
        width: "25%",
    },
    labelUnderneath:{
        marginHorizontal: "7%",
        fontSize: 18
    },
    centerText:
    {
        textAlign: 'center'
    },

    button:
    {
        backgroundColor: "#006175",
        marginHorizontal: "17%",
        color: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingTop: "5%",
        paddingBottom: "5%",
        borderWidth: 0
    },
    testyTouchable:
    {
        marginBottom: "10%",
        height: "80%",
        width: "40%"
    }
});

/*
    Start of Location Entry

        <View style={[sparkViewStyles.sparkContainer]}>
            <TextInput style={[sparkViewStyles.inputBox, sparkViewStyles.locationInputBox]}placeholder="Enter Location"></TextInput>
        </View>

    Start of Profile Adding

        <View style={[sparkViewStyles.sparkVerticalContainer]}>
             <View style={[sparkViewStyles.boxOne, sparkViewStyles.veryTopBox]}>
                    <TextInput placeholder='Enter Volunteer Name' style={{fontSize: 18}}></TextInput>
                </View>
                <View style={[sparkViewStyles.boxOne]}>
                    <Text style={[sparkViewStyles.boxText]}>Friend Name</Text>
                    <Image style={{width: "20%", height: "55%", marginRight: "5%"}} source={require("../../../assets/EriToken.png")}>

                    </Image>
                </View>
                <View style={[sparkViewStyles.boxTwo]}>
                    <Text style={[sparkViewStyles.boxText]}>Friend Name</Text>
                    <Image style={{width: "20%", height: "55%", marginRight: "5%"}} source={require("../../../assets/EriToken.png")}>

                    </Image>
                </View>
                <View style={[sparkViewStyles.boxOne]}>
                    <Text style={[sparkViewStyles.boxText]}>Friend Name</Text>
                    <Image style={{width: "20%", height: "55%", marginRight: "5%"}} source={require("../../../assets/EriToken.png")}>

                    </Image>
                </View>
                <View style={[sparkViewStyles.boxTwo]}>
                    <Text style={[sparkViewStyles.boxText]}>Profile Name</Text>
                    <Image style={{width: "20%", height: "55%", marginRight: "5%"}} source={require("../../../assets/EriToken.png")}>

                    </Image>
                </View>
                <View style={[sparkViewStyles.boxOne, sparkViewStyles.veryBottomBox]}>
                    <Text style={[sparkViewStyles.boxText]}>Profile Name</Text>
                    <Image style={{width: "20%", height: "55%", marginRight: "5%"}} source={require("../../../assets/EriToken.png")}>

                    </Image>
                </View>
        </View>


    Start of Date Entry

        <View style={[sparkViewStyles.sparkContainer]}>
            <View style={[sparkViewStyles.dateInputContainer]}>
                <TextInput style={[sparkViewStyles.dateInputBox]}placeholder="10"></TextInput>
                <Text style={[sparkViewStyles.labelUnderneath]}>Month</Text>
            </View>
            <View style={[sparkViewStyles.dateInputContainer]}>
                <TextInput style={[sparkViewStyles.dateInputBox]}placeholder="4"></TextInput>
                <Text style={[sparkViewStyles.labelUnderneath]}>Day</Text>
            </View>
            <View style={[sparkViewStyles.dateInputContainer]}>
                <TextInput style={[sparkViewStyles.dateInputBox]}placeholder="2022"></TextInput>
                <Text style={[sparkViewStyles.labelUnderneath]}>Year</Text>
            </View>
        </View>

    Start of Time Entry

 
        <View style={[sparkViewStyles.sparkContainer]}>
            <TextInput style={[sparkViewStyles.hourInputBox]} placeholder="6"></TextInput>
            <Text style={{fontSize:36, marginBottom:"1.5%"}}>:</Text>
            <TextInput style={[sparkViewStyles.minuteInputBox]} placeholder="6"></TextInput>
            <Text style={{fontSize:36}}>PM</Text>
        </View>

*/