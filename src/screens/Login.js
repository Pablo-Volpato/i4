import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  CheckBox
} from 'react-native';
import Logo from '../../assets/logo.png'
import { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'


function Login({ navigation }) {

  const [isSelected, setSelection] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    senha: ''
  })


  const entrar = () => {
    try {

      if (login.email.length && login.senha.length >= 5) {

        if (isSelected == true) {

          AsyncStorage.setItem('email')
          AsyncStorage.setItem('senha')

        }
        navigation.navigate("Feed")
      }
      else {
        alert('Insira um email e uma senha com mais de 5 caracteres')
      }

    } catch (err) {
      console.log(err)
    }
  }



  return (
    <KeyboardAvoidingView style={styles.background}>

      <View>
        <Image style={styles.imagem}
          source={Logo}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Login:</Text>
        <TextInput
          style={styles.inputs}
          label='Email'
          value={login.email}
          autoCorrect={false}
          onChangeText={(text) => setLogin({ ...login, email: text })}
          keyboardType='email-address'
        />
        <Text style={styles.text}>Senha:</Text>
        <TextInput
          style={styles.inputs}
          label='Senha'
          value={login.senha}
          autoCorrect={false}
          onChangeText={(text) => setLogin({ ...login, senha: text })}
          secureTextEntry='true'
        />

        <View style={styles.check}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>manter conectado</Text>
          </View>
          {/* <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
        </View>

        <TouchableOpacity style={styles.botao}
          onPress={() => entrar()}
        >
          <Text style={styles.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F5F5'
  },

  imagem: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 220,
    height: 105,
    marginTop: 80,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    backgroundColor: '#F7F5F5'
  },

  inputs: {
    backgroundColor: 'white',
    marginBottom: 15,
    width: '90',
    fontSize: 18,
    borderRadius: 7,
    padding: 5
  },

  botao: {
    backgroundColor: 'lightgray',
    borderRadius: 25,
    width: '70%',
    height: '7%',
    textAlign: 'center',
    marginBottom: 40
  },

  textoBotao: {
    fontSize: 15,
    fontFamily: 'bold',
    paddingTop: 6,
    marginBottom: 20
  },

  text: {
    marginRight: 170,
    fontSize: 12
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

});

export default Login;
