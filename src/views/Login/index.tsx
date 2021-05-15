import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../screens/RootStackParamList';
import api from '../../services/api';
import { AxiosError, AxiosResponse } from 'axios';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const navigation = useNavigation<loginScreenProp>();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function login() {
        api.post('usuarios', {nome: `${usuario}`, email: `${usuario}@user.com`, telefone: '(86) 3333-4444'})
            .then((response: AxiosResponse) => navigation.navigate('Profile', response.data.id))
            .catch((error: AxiosError) => console.log(error.message));
    }

    return (
        <View style={styles.container}>

            <Text>Tela de login!</Text>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsuario}
                    value={usuario}
                    placeholder='Digite o usuário'
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry
                    placeholder='Digite a senha'
                />
            </View>
            <View style={styles.inputBox}>
                <Button
                    title="FAZER LOGIN"
                    onPress={() => /*navigation.navigate('Profile')*/login()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    inputBox: {
        flexDirection: 'row'
    }
});
