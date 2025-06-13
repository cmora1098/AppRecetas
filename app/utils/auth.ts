// utils/auth.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function cerrarSesion() {
  // Borrar datos de sesión
  await AsyncStorage.clear();
}
