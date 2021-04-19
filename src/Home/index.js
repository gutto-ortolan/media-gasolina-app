import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Estilos from "./style";

const Home = ({ navigation }) => {
  const [kmPercorrido, setKmPercorrido] = useState(null);
  const [litrosConsumidos, setLitrosConsumidos] = useState(null);
  const [errorKm, setErrorKm] = useState(null);
  const [errorLitros, setErrorLitros] = useState(null);

  const validar = () => {
    setErrorKm(null);
    setErrorLitros(null);
    let error = false;
    if (kmPercorrido == null || kmPercorrido.indexOf("-") != -1) {
      setErrorKm("Preencha a quilometragem corretamente");
      error = true;
    }

    if (litrosConsumidos == null || litrosConsumidos.indexOf("-") != -1) {
      setErrorLitros("Preencha a quantidade de litros corretamente");
      error = true;
    }

    return !error;
  };

  const acessar = () => {
    if (validar()) {
      navigation.navigate("Media", {
        quilometragem: kmPercorrido,
        litros: litrosConsumidos,
      });
    }
  };

  return (
    <SafeAreaView style={Estilos.background}>
      <View style={Estilos.container}>
        <Text style={Estilos.titulo}>CÁLCULO DA MÉDIA DE CONSUMO</Text>
        <View style={Estilos.inputContainer}>
          <TextInput
            placeholder={"KM percorrido"}
            style={Estilos.input}
            value={kmPercorrido}
            onChangeText={setKmPercorrido}
            keyboardType="numeric"
          />
        </View>
        {errorKm ? <Text style={Estilos.erros}>{errorKm}</Text> : null}

        <View style={Estilos.inputContainer}>
          <TextInput
            placeholder={"Litros consumidos"}
            style={Estilos.input}
            value={litrosConsumidos}
            onChangeText={setLitrosConsumidos}
            keyboardType="numeric"
          />
        </View>
        {errorLitros ? <Text style={Estilos.erros}>{errorLitros}</Text> : null}

        <TouchableOpacity
          style={Estilos.buttonContainer}
          onPress={() => acessar()}
        >
          <Text style={Estilos.buttonText}>Simular média</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;