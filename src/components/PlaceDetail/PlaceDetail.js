import React from "react";
import { Modal, View, Image, Button, Text, StyleSheet } from "react-native";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null}>
      <View style={styles.modalContent}>
        <View>
          <Button title="Close" color="red" />
          <Button title="Delete" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    margin: 22
  }
});

export default PlaceDetail;
