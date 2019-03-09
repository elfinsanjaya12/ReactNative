import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends React.Component {
  state = {
    placeName: "", //nama tempat
    places: [] //tempat
  };

  /*
   * this function placeNameChangledhandler
   */
  placeNameChangledHandler = val => {
    this.setState({ placeName: val });
  };

  /*
   * this function placeSubmitHandler
   */
  placeSubmitHandler = () => {
    //Fungsi trim adalah fungsi yang bertujuan untuk menghilangkan suatu karakter dari suatu teks atau kumpulan teks.
    if (this.state.placeName.trim() === "") {
      return;
    } else {
      this.setState(prevState => {
        return {
          // Fungsi concat() menggabungkan teks dari satu atau lebih string dan mengembalikanya menjadi sebuah string
          places: prevState.places.concat(prevState.placeName)
        };
      });
    }
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="masukan test"
            value={this.state.placeName}
            onChangeText={this.placeNameChangledHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
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
