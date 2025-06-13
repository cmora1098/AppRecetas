import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ConfiguracionScreen() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [notificaciones, setNotificaciones] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Configuración</Text>

      <View style={styles.item}>
        <Ionicons name="moon-outline" size={24} color="#ff7f00" />
        <Text style={styles.label}>Modo oscuro</Text>
        <Switch
          value={modoOscuro}
          onValueChange={setModoOscuro}
          trackColor={{ false: "#ccc", true: "#ff7f00" }}
          thumbColor={modoOscuro ? "#fff" : "#f4f3f4"}
        />
      </View>

      <View style={styles.item}>
        <Ionicons name="notifications-outline" size={24} color="#ff7f00" />
        <Text style={styles.label}>Notificaciones</Text>
        <Switch
          value={notificaciones}
          onValueChange={setNotificaciones}
          trackColor={{ false: "#ccc", true: "#ff7f00" }}
          thumbColor={notificaciones ? "#fff" : "#f4f3f4"}
        />
      </View>

      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          Alert.alert("Soporte", "Contáctanos a soporte@recetas.com")
        }
      >
        <Feather name="mail" size={24} color="#ff7f00" />
        <Text style={styles.label}>Contacto / Soporte</Text>
      </TouchableOpacity>

      <View style={[styles.item, { borderBottomWidth: 0 }]}>
        <Feather name="info" size={24} color="#ff7f00" />
        <Text style={styles.label}>Versión 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#ff7f00",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "space-between",
  },
  label: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
});
