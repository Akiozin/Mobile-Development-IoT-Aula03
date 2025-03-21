//Importa os módulos
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//Importa os tipos das rotas para garantr tipagem no typescript
import { StackScreenProps } from "@react-navigation/stack";

//Define os tipos das rotas
type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

//Define as propriedades que a tela Home vai receber usando o tipo StackScreenProps
type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

//Declarando o componente funcional
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bem Vindo a Home Screen</Text>
            <Button
                title="Ir para a tela detalhes"
                onPress={() => navigation.navigate('Details')}
            />
        </View>

    );
}

//Define o estilo da tela
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;