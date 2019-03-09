import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="masukan test"
            value={this.state.placeName}
            onChangeText={this.placeNameChangledhandler}
          />
          <Button title="Add" style={styles.placeButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start" //mengatur untuk atas tengah dan bawah
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: { width: "70%" },
  placeButton: { width: "30%" }
});
