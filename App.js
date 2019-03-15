import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// import ListItem from "./src/components/ListItem/ListItem";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceImage from "./src/assets/beautiful-place.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  state = {
    // placeName: "", //nama tempat
    places: [], //tempat
    selectedPlace: null
  };

  /* this function create _placeAddedHandler */
  _placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        // Fungsi concat() menggabungkan teks dari satu atau lebih string dan mengembalikanya menjadi sebuah string
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          // image: PlaceImage
          image: {
            uri:
              "https://miro.medium.com/max/2400/1*eYd3xl0SWHGKRPl1KTDF7A.jpeg"
          }
        })
      };
    });
  };

  /* this function delete _placeDeletedHandler*/
  _placeDeleteHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  _placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} />

        <PlaceInput onPlaceAdded={this._placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this._placeSelectedHandler}
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
