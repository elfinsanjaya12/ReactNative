import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// import ListItem from "./src/components/ListItem/ListItem";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
export default class App extends React.Component {
  state = {
    // placeName: "", //nama tempat
    places: [] //tempat
  };

  /* this function create _placeAddedHandler */
  _placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        // Fungsi concat() menggabungkan teks dari satu atau lebih string dan mengembalikanya menjadi sebuah string
        places: prevState.places.concat(placeName)
      };
    });
  };

  /* this function delete _placeDeletedHandler*/
  _placeDeleteHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this._placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this._placeDeleteHandler}
        />
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
  placeButton: { width: "30%" },
  listContainer: {
    width: "100%"
  }
});
