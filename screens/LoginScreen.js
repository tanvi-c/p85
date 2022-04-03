import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";
import db from "../config";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "", 
            password: "",
        };
    }


handleLogin = (login, password) => {
    firebase.auth()
    .signInWithLoginAndPassword(login, password).then(() => {
        this.props.navigation.navigate("Ride"); 
    })
    .catch(error => {Alert.alert(error.message);});
};

//const { render } = require("react-dom");
//const { TouchableOpacity } = require("react-native");

render() {
    const {login, password} = this.state;
    return (
        <View style={styles.lowerContainer}>
        <TextInput 
        style = {styles.textinput}
        onChangeText= {text => this.setState({login: text})}
        placeholder={"Login"}
        placeholderTextColor={"#FFFFFF"}
        autoFocus
        />
        <TextInput
        style={[styles.textinput, {marginTop: 20}]}
        onChangeText={text => this.setState({password: text})}
        placeholder={"Enter Password"}
        placeholderTextColor={"#FFFFFF"}
        secureTextEntry
        />
        <TouchableOpacity
        style={[styles.button, {marginTop: 20}]}
        onPress={() => this.handleLogin(login, password)}
        >
        <Text style = {styles.buttonText}> Login 
        </Text>
        </TouchableOpacity>
        </View>
    )
}
}