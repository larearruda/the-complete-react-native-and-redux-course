import React from "react";
import { Text, StyleSheet, View , Image} from "react-native";

const ImageDetails = ({imagePath, cardTitle, imageScore}) =>{
    // console.log(props)

    return (<View>
        <Image source={imagePath}/>
        <Text>{cardTitle}</Text>
        <Text>Nota da foto: {imageScore}</Text> 
    </View>);
    
};

const styles = StyleSheet.create({});

export default ImageDetails;