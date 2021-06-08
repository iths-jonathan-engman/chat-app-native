import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import firebase from '../firebase/fire';

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/WeChat.png')} style={{width: 200, height: 200, marginBottom: 50}} />
      </View>

      <View>
        <Text style={{marginBottom: 35, fontSize: 20}}>Great to have you back!</Text>
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

      <Button style={styles.button} title="Sign In" onPress={() => signIn()} />

      <View style={styles.loginText}>
        <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: 'rgba(81,135,200,1)'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default SigninScreen;

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
    marginVertical: 20
  }
});