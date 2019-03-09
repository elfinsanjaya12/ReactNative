import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  /* This function _placeNameChangleHandler */
  _placeNameChangleHandler = val => {
    this.setState({ placeName: val });
  };

  /* This function _placeSubmitHandler */
  _placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this._placeNameChangleHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          onPress={this._placeSubmitHandler}
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
