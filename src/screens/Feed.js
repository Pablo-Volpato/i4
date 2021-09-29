import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import I4 from '../../assets/i4.png'
import info from '../../assets/icon1.png'
import Icon from 'react-native-vector-icons/AntDesign'

function Feed({ navigation }) {

    const [busca, setBusca] = useState();
    const [games, setGames] = useState({});

    useEffect(() => {

        const data = axios.get('https://api.rawg.io/api/games?key=d286ce7ccf48422fb408b5481d5deb31&dates=2019-09-01,2019-09-30&platforms=18,1,7');
        setGames(data)

    }, []);

    console.log('games', games);

    const voltar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }


    return (
        <SafeAreaView>

            <ScrollView>

                <Icon name='arrowleft' size={50} color='#C4C4C4' style={styles.icon} onPress={() => voltar()} />

                <Image
                    style={styles.img}
                    source={I4}
                />

                <View style={styles.container}>
                    <View style={styles.viewimg}>
                        <Image source={info} style={styles.icone} />
                    </View>
                    <Text style={styles.titulo}>
                        NOME DO JOGO
                    </Text>
                    <View style={styles.cont}>
                        <Text style={styles.conteudo}>
                            Conteúdo
                        </Text>
                    </View>
                    <Text style={styles.data}>
                        Data e hora
                    </Text>

                </View>

                <View style={styles.container}>
                    <View style={styles.viewimg}>
                        <Image source={info} style={styles.icone} />
                    </View>
                    <Text style={styles.titulo}>
                        NOME DO JOGO
                    </Text>
                    <View style={styles.cont}>
                        <Text style={styles.conteudo}>
                            Conteúdo
                        </Text>
                    </View>
                    <Text style={styles.data}>
                        Data e hora
                    </Text>

                </View>

                <View style={styles.container}>
                    <View style={styles.viewimg}>
                        <Image source={info} style={styles.icone} />
                    </View>
                    <Text style={styles.titulo}>
                        NOME DO JOGO
                    </Text>
                    <View style={styles.cont}>
                        <Text style={styles.conteudo}>
                            Conteúdo
                        </Text>
                    </View>
                    <Text style={styles.data}>
                        Data e hora
                    </Text>

                </View>

                <View style={styles.container}>
                    <View style={styles.viewimg}>
                        <Image source={info} style={styles.icone} />
                    </View>
                    <Text style={styles.titulo}>
                        NOME DO JOGO
                    </Text>
                    <View style={styles.cont}>
                        <Text style={styles.conteudo}>
                            Conteúdo
                        </Text>
                    </View>
                    <Text style={styles.data}>
                        Data e hora
                    </Text>

                </View>

                <View style={styles.container}>
                    <View style={styles.viewimg}>
                        <Image source={info} style={styles.icone} />
                    </View>
                    <Text style={styles.titulo}>
                        NOME DO JOGO
                    </Text>
                    <View style={styles.cont}>
                        <Text style={styles.conteudo}>
                            Conteúdo
                        </Text>
                    </View>
                    <Text style={styles.data}>
                        Data e hora
                    </Text>

                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
        alignContent: 'flex-end',
        width: 155,
        height: 42,
        marginRight: 8,
        marginLeft: 158,
        marginTop: -45
    },

    icon: {
        alignContent: 'flex-start',
        width: 15,
        marginLeft: 8
    },

    container: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 14,
        borderRadius: 15
    },

    titulo: {
        fontSize: 18,
        marginLeft: 14,
        marginTop: -35,
        height: 20
    },

    cont: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 8
    },

    conteudo: {
        fontSize: 14,
        marginLeft: 14,
        marginTop: 10

    },

    data: {
        fontSize: 14,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 14,
        marginTop: 10
    },

    icone: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    viewimg: {
        alignItems: 'flex-end'
    }
})

export default Feed;