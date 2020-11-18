import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Account, accounts } from '../App.js'


class Registration extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    createAccount = (email, username, password) => {
        // DOES -- creates new user account with given email, username, password; user will use the latter two to login
        //
        // TODO -- add checks to ensure email/username/password follow necessary guidelines, visual aids
        //      -- user registration directs new user to their home page
        //      -- "already have an account" button
        //
        // BUGS -- let me know

        if (this.state.email == "" || this.state.username == "" || this.state.password == "")
            alert('Missing Required Fields')
        else {
            if (accounts.findIndex((element) => element.email.toUpperCase() == email.toUpperCase()) != -1)
                alert('This email address is already in use')
            else if (accounts.findIndex((element) => element.username.toUpperCase() == username.toUpperCase()) != -1)
                alert('This username is already in use')
            else {
                alert('Account successfully created')
                new Account(email,username,password)
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email Address"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                    maxLength={25}
                    textAlign="center"
                    textContentType="emailAddress"
                    value={this.state.email}
                />

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
                    style={styles.submitButton}
                    onPress={
                        () => this.createAccount(this.state.email, this.state.username, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> CREATE ACCOUNT </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Registration

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
    submitButtonText: {
        color: 'white'
    }
})