# Estudos React Native

## Estrutura básica de um componente
```bash 
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ExampleScreen = () =>{
    return (<View>
        <Text>Example Screen</Text>
    </View>);
    
};

const styles = StyleSheet.create({});

export default ExampleScreen;
```

## Projeto rn-starter
### Descrição
Primeiros passos com React Native, criando uma aplicação simples com dois botões na página inicial que redireciona para outros componentes da aplicação.
