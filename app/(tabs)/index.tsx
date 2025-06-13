// app/(tabs)/index.tsx

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavoritos } from "../hooks/useFavoritos";
import { Ionicons } from "@expo/vector-icons";

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

export default function Recetas() {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={{ padding: 20 }}
        data={recetas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const esFavorito = favoritos.includes(item.id);
          return (
            <View style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <View style={styles.info}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
                  <Ionicons
                    name={esFavorito ? "heart" : "heart-outline"}
                    size={28}
                    color={esFavorito ? "red" : "gray"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
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

  titulo: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
