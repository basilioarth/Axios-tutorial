import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../screens/RootStackParamList';
import { AxiosError, AxiosResponse } from 'axios';
import api from '../../services/api';


type profileScreenProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type RouteParams = {
    Profile: {
      userId: string;
    };
  };

export default function Profile() {
    const navigation = useNavigation<profileScreenProp>();
    const route = useRoute<RouteProp<RouteParams, 'Profile'>>();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        api.get(`usuarios/${route.params}`)
            .then((response: AxiosResponse) => {
                setNome(response.data.nome)
                setEmail(response.data.email)
                setTelefone(response.data.telefone)
            })
            .catch((error: AxiosError) => console.log(error.message));
        
    }, []);

    return (
        <View style={styles.container}>
            <Text>Tela de perfil!</Text>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    editable={false}
                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    editable={false}

                />
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTelefone}
                    value={telefone}
                    editable={false}
                />
            </View>
            <Button
                title="SAIR"
                onPress={() => navigation.navigate('Login')}
            />
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
