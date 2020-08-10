import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () =>{
    const friends = [
        { name:  "Amiguinho 1", age: "32" },
        { name:  "Amiguinho 2", age: "28" },
        { name:  "Amiguinho 3", age: "37" },
        { name:  "Amiguinho 4", age: "52" },
        { name:  "Amiguinho 5", age: "19" },
        { name:  "Amiguinho 6", age: "25" }
    ];

    return (
        <FlatList 
        keyExtractor={ friend => friend.name }
        data={friends} 
        renderItem={ ({item}) => {
            return <Text style={styles.textStyle}> {item.name} - Idade: {item.age} </Text>
        }} 
        /> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
