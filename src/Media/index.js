import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import Estilos from "./style";

const Media = ({ route }) => {
  const kmPercorrido = route.params?.quilometragem;
  const litrosConsumidos = route.params?.litros;

  const calculaMedia = () => {
    let media = 0.0;
    media = kmPercorrido / litrosConsumidos;
    return media;
  };

  const media = calculaMedia();

  const verificaConsumo = () => {
    if (media > 12) {
      return "Consumo está no nível A";
    } else if (media <= 12 && media > 10) {
      return "Consumo está no nível B";
    } else if (media <= 10 && media > 8) {
      return "Consumo está no nível C";
    } else if (media <= 8 && media > 4) {
      return "Consumo está no nível D";
    } else {
      return "Consumo está no nível E";
    }
  };

  return (
    <SafeAreaView style={Estilos.background}>
      <View style={Estilos.containerMedia}>
        <View style={{ borderWidth: 1, padding: 5 }}>
          <Text style={Estilos.tamanhoLetra}>
            Km percorridos: {kmPercorrido}
          </Text>
          <Text style={Estilos.tamanhoLetra}>
            Litros consumidos: {litrosConsumidos}
          </Text>
        </View>
        <Text style={{ fontSize: 25, marginTop: 15 }}>
          Média: {media.toFixed(2).replace(".", ",")} Km/L
        </Text>
        <Text style={{ fontSize: 20 }}>{verificaConsumo()}</Text>
      </View>

      <View style={Estilos.containerTabela}>
        <Text style={{ fontSize: 17, marginBottom: 5, fontWeight: "bold" }}>
          Tabela de Consumo
        </Text>
        <View style={{ borderWidth: 1, padding: 3 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={Estilos.kmA}>Mais de 12 Km/l</Text>
            <Text style={Estilos.consumoA}>A</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Estilos.kmB}>Até 12 Km/l</Text>
            <Text style={Estilos.consumoB}>B</Text>
          </View>
          <View style={Estilos.viewLinha}>
            <Text style={Estilos.kmC}>Até 10 Km/l</Text>
            <Text style={Estilos.consumoC}>C</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Estilos.kmD}>Até 8 Km/l</Text>
            <Text style={Estilos.consumoD}>D</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={Estilos.kmE}>Até 4 Km/l</Text>
            <Text style={Estilos.consumoE}>E</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Media;