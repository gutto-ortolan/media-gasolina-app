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
          <Text style={{ fontSize: 25 }}>Km percorridos: {kmPercorrido}</Text>
          <Text style={{ fontSize: 25 }}>
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
            <Text
              style={{
                padding: 2,
                height: 25,
                marginBottom: 3,
                width: 200,
                backgroundColor: "#02933D",
              }}
            >
              Mais de 12 Km/l
            </Text>
            <Text
              style={{
                height: 25,
                marginBottom: 3,
                width: 20,
                backgroundColor: "#02933D",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3,
                paddingLeft: 5,
              }}
            >
              A
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                padding: 2,
                height: 25,
                marginBottom: 3,
                width: 200,
                backgroundColor: "#C7D401",
              }}
            >
              Até 12 Km/l
            </Text>
            <Text
              style={{
                height: 25,
                marginBottom: 3,
                width: 20,
                backgroundColor: "#C7D401",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3,
                paddingLeft: 5,
              }}
            >
              B
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                padding: 2,
                height: 25,
                marginBottom: 3,
                width: 200,
                backgroundColor: "#FFEF02",
              }}
            >
              Até 10 Km/l
            </Text>
            <Text
              style={{
                height: 25,
                marginBottom: 3,
                width: 20,
                backgroundColor: "#FFEF02",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3,
                paddingLeft: 5,
              }}
            >
              C
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                padding: 2,
                height: 25,
                marginBottom: 3,
                width: 200,
                backgroundColor: "#F9BD02",
              }}
            >
              Até 8 Km/l
            </Text>
            <Text
              style={{
                height: 25,
                marginBottom: 3,
                width: 20,
                backgroundColor: "#F9BD02",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3,
                paddingLeft: 5,
              }}
            >
              D
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                padding: 2,
                height: 25,
                width: 200,
                backgroundColor: "#E97601",
              }}
            >
              Até 4 Km/l
            </Text>
            <Text
              style={{
                height: 25,
                width: 20,
                backgroundColor: "#E97601",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 3,
                paddingLeft: 5,
              }}
            >
              E
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Media;
