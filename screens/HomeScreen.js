import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import firebase from '../firebase/fire';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'WeTalker',
  };

  state = {
    name: '',
  };

  logOut = async () =>
    await firebase.auth().signOut().then(() => {
      console.log('Logout')
      this.props.navigation.navigate('Signin')
    });

  joinChat = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>

        <View>
          <Image source={require('../assets/WeChat.png')} style={{width: 200, height: 200, marginBottom: 50}} />
        </View>

        <Text style={{marginBottom: 35, fontSize: 20}}>Enter your name:</Text>

        <View style={styles.form}>
          <Input style={styles.input} placeholder="Name" value={this.state.name} onChangeText={this.onChangeText} />
        </View>

        <View style={{ width: 200, marginBottom: 30}}>
          <Button title="Join" onPress={this.joinChat} />
        </View>

        <View style={{ width: 200, height: 35 }}>
          <TouchableOpacity style={styles.button} onPress={this.logOut}>
            <Text style={{ color: '#2196f3'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#2196f3',
    borderColor: '#2196f3',
    borderWidth: 2,
    borderRadius: 2,
  }
});