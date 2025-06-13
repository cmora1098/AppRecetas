import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet, 
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

export default function SubirRecetaScreen() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenUri, setImagenUri] = useState<string | null>(null);

  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImagenUri(result.assets[0].uri);
    }
  };

  const guardarReceta = () => {
    if (!titulo || !descripcion || !imagenUri) {
      Alert.alert(
        "Faltan campos",
        "Completa todos los campos antes de guardar."
      );
      return;
    }

    // Aquí podrías guardar la receta en un backend o local
    console.log("Receta guardada:", { titulo, descripcion, imagenUri });
    Alert.alert("¡Éxito!", "Tu receta fue guardada exitosamente.");
    setTitulo("");
    setDescripcion("");
    setImagenUri(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Subir Receta</Text>

      <TouchableOpacity
        style={styles.imagenSelector}
        onPress={seleccionarImagen}
      >
        {imagenUri ? (
          <Image source={{ uri: imagenUri }} style={styles.imagen} />
        ) : (
          <View style={styles.iconoPlaceholder}>
            <Ionicons name="camera-outline" size={40} color="#ccc" />
            <Text style={styles.textoImagen}>Seleccionar imagen</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Título de la receta"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción de la receta"
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <TouchableOpacity style={styles.botonGuardar} onPress={guardarReceta}>
        <Text style={styles.botonTexto}>Guardar Receta</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    textAlign: "center",
    color: "#ff7f00",
  },
  imagenSelector: {
    backgroundColor: "#fff5eb",
    height: 200,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  iconoPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  textoImagen: {
    color: "#999",
    marginTop: 8,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  botonGuardar: {
    backgroundColor: "#ff7f00",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
