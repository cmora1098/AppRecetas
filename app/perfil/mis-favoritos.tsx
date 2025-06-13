import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity, // ✅ Esto es necesario
} from "react-native";
  
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useFavoritos } from "../hooks/useFavoritos";

const recetas = [
  {
    id: 1,
    titulo: "Tacos al pastor",
    imagen:
      "https://cdn.pixabay.com/photo/2020/02/20/07/52/tacos-4867011_1280.jpg",
  },
  {
    id: 2,
    titulo: "Pizza casera",
    imagen:
      "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
  {
    id: 3,
    titulo: "Ensalada fresca",
    imagen:
      "https://cdn.pixabay.com/photo/2017/04/23/20/24/salad-2254698_1280.jpg",
  },
];

export default function FavoritosScreen() {
  const { favoritos, toggleFavorito } = useFavoritos();
  const recetasFavoritas = recetas.filter((receta) =>
    favoritos.includes(receta.id)
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>❤️ Favoritos</Text>

        {recetasFavoritas.length === 0 ? (
          <Text style={styles.emptyText}>No tienes recetas favoritas 😔</Text>
        ) : (
          recetasFavoritas.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <View style={styles.info}>
                <Text style={styles.nombre}>{item.titulo}</Text>
                <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
                  <Ionicons name="heart" size={28} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff7f00",
  },
  card: {
    marginBottom: 20,
    backgroundColor: "#fff5eb",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  imagen: {
    width: "100%",
    height: 180,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    alignItems: "center",
  },
  nombre: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#999",
  },
});
