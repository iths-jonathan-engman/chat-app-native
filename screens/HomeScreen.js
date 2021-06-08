// import React, { useState } from 'react';
// import { View, StyleSheet, TextInput, TextTouchableOpacity } from 'react-native';
// import { Button, Input, Text } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import firebase from '../firebase/fire';
// import SigninScreen from './SigninScreen';


// const HomeScreen = ({ navigation }) => {
//   const [name, setName] = useState('');

//     const logOut = async () => {
//         await firebase.auth().signOut().then(() => {
//           console.log('logout')
//           // Sign-out successful.
//           navigation.navigate('Signin')
//         }).catch((error) => {
//           // An error happened.
//           console.log(error)
//         });
//     }
//     const chatRoom = () => {
//       navigation.navigate("Chat", { name })
//     }


//     return (
//       <View style={styles.container}>
//         <View style={{marginHorizontal: 32}}>
//           <Text>Pick a username</Text>
//           <TextInput placeholder="Username" value={name} onChangeText={setName}/>
//           <TouchableOpacity onPress={() => chatRoom()}>
//             <Text>Proceed</Text>
//           </TouchableOpacity>
//         </View>

//           <Button style={styles.button} title="Sign Out" onPress={() => logOut()} />
//       </View>
//     )
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button: {
//     width: 200
//   }
// })
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
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
    })

  joinChat = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 35, fontSize: 20}}>Enter your name:</Text>

        <View style={styles.form}>
          <Input style={styles.input} placeholder="Name" value={this.state.name} onChangeText={this.onChangeText} />
        </View>

        <Button style={styles.button} title="Join" onPress={this.joinChat} />
        <Button style={styles.button} title="Sign Out" onPress={this.logOut} />
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
    width: 200
  },
});
