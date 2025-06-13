import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { cerrarSesion } from "../utils/auth";

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={100} color="#ff7f00" />
        <Text style={styles.nombre}>¡Hola, Usuario!</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/perfil/mis-favoritos")}
        >
          <MaterialIcons name="favorite" size={24} color="#ff7f00" />
          <Text style={styles.menuTexto}>Mis Recetas Favoritas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/perfil/subir-receta")}
        >
          <Feather name="upload" size={24} color="#ff7f00" />
          <Text style={styles.menuTexto}>Subir Receta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/perfil/configuracion")}
        >
          <Ionicons name="settings-outline" size={24} color="#ff7f00" />
          <Text style={styles.menuTexto}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={async () => {
            // 🔐 Aquí puedes limpiar AsyncStorage o cualquier token guardado
            router.replace("/login"); // 🔁 Reemplaza todo y va a login
          }}
        >
          <MaterialIcons name="logout" size={24} color="#ff7f00" />
          <Text style={styles.menuTexto}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  menu: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuTexto: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
});
