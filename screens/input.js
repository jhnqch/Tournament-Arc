import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Account, accounts } from '../App.js'


class Inputs extends Component {
    state = {
        username: '',
        password: ''
    }

    handleUsername = (text) => {
        this.setState({username: text})
    }

    handlePassword = (text) => {
        this.setState({password: text})
    }

    login = (username, password) => {
        // DOES -- creates new user account with given email, username, password; user will use the latter two to login
        //
        // TODO -- user login directs user to their home page
        //      -- "wish to create an account" button
        //
        // BUGS -- let me know

        if (this.state.username == "" || this.state.password == "")
            alert('Missing Required Fields')
        else {
            var a = accounts.findIndex((element) => element.username.toUpperCase() == username.toUpperCase())
            if (a == -1)
                alert('User Not Found')
            else {
                if (accounts[a].password != password)
                    alert('Log in Information is Incorrect')
                else alert('Logged In Successfully')
            }
        }
    }

    render(){
        return (
            <View style = {styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Username"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleUsername}
                    maxLength={25}
                    textAlign="center"
                    textContentType="username"
                    value={this.state.username}
                />
            
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                    maxLength={25}
                    textAlign="center"
                    textContentType="password"
                    value={this.state.password}
                />
            
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress={
                    () => this.login(this.state.username, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> LOG IN </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 2
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})