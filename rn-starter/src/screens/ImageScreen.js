import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail cardTitle="Forest" imagePath={require('../../assets/forest.jpg')} imageScore="5" />
            <ImageDetail cardTitle="Beach" imagePath={require('../../assets/beach.jpg')} imageScore="10" />
            <ImageDetail cardTitle="Mountain" imagePath={require('../../assets/mountain.jpg')} imageScoxre="8" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;