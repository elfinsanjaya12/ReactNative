import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangledhandler = event => {
    // alert(event);
    this.setState({ placeName: event });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="masukan test"
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          value={this.state.placeName}
          onChangeText={this.placeNameChangledhandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
