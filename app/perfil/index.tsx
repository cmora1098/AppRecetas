import { router } from "expo-router";

<TouchableOpacity
  style={styles.menuItem}
  onPress={() => router.push("/perfil/mis-favoritos")}
>
  <MaterialIcons name="favorite" size={24} color="#ff7f00" />
  <Text style={styles.menuTexto}>Mis Recetas Favoritas</Text>
</TouchableOpacity>;
