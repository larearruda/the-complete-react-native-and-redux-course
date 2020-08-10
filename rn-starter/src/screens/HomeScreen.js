import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {

	return (
	<View>
		<Text style={styles.text}>Corona Virus</Text>

		<Button 
			title="Ir para Components"
			onPress={() => navigation.navigate('Component')}
		/>

		<Button 
			title="Ir para Lista"
			onPress={() => navigation.navigate('List')}
		/>

		<Button 
			title="Ir para Imagens"
			onPress={() => navigation.navigate('Image')}
		/>

		<Button 
			title="Ir para Contador"
			onPress={() => navigation.navigate('Counter')}
		/>

		<Button 
			title="Ir para Colors"
			onPress={() => navigation.navigate('Color')}
		/>

<Button 
			title="Ir para Squade Demo"
			onPress={() => navigation.navigate('Square')}
		/>

	</View>);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
