import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user;
      navigation.navigate('Signin')
    })
    .catch((error) => {
      error.code;
      error.message;
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/WeChat.png')} style={{width: 200, height: 200, marginBottom: 50}} />
      </View>

      <View>
        <Text style={{marginBottom: 35, fontSize: 20}}>Join the WeChat movement today!</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Input style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
        </View>

        <View>
          <Input style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        </View>
      </View>

      {
        error ?
        <Text style={{ color: 'red' }}>{error}</Text>
        : null
      }

      <Button style={styles.button} title="Sign Up" onPress={() => signUp()} />

      <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: 'rgba(81,135,200,1)'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 30,
  },
  input: {
    borderBottomcolor: "#BAB7C3",
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: "#514E5A",
    fontSize: 15,
    height: 40,
    width: 200
  },
  button: {
    width: 200
  },
  loginText: {
    flexDirection: 'row',
    marginVertical: 20,
  }
})