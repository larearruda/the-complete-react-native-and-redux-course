import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () =>{
    const myName = "Lari"
    return (
    <View>
        <Text style={styles.gettingStarted}>Getting Started with React Native</Text>
        <Text style={styles.myName}> Oi, aqui quem fala é {myName}</Text>
    </View>
    );

}

const styles = StyleSheet.create({
    gettingStarted: {
        fontSize: 45
    },
    myName:{
        fontSize: 20
    }
})

export default ComponentScreen;