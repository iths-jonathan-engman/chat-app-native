import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../firebase/fireChat';

const image = { uri: "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__480.png" };

type Props = {
  name?: string,
};

class ChatScreen extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name'),
    headerStyle: {
      backgroundColor: '#cccccc',
      height: 44,
    }
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      createdAt: new Date(),
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1}}>
        <ImageBackground source={image} style={{ backgroundColor: "black", flex: 1, opacity: 0.8}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
          />
        </ImageBackground>
      </View>
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
})