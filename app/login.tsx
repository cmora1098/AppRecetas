import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
  
export default function LoginRecetas() {
  const router = useRouter();

  const [form, setForm] = useState<"login" | "registro" | "recuperar">("login");

  // States para Login
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // States para Registro
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");

  // State para Recuperar
  const [emailRec, setEmailRec] = useState("");

  // Handlers
  const handleLogin = () => {
    // alert(`¡Bienvenido a AppRecetas, ${emailLogin}! 🍳`);
    router.replace("/(tabs)"); // <-- Redirige al menú principal
  };

  const handleRegistro = () => {
    if (passwordReg !== confirmPasswordReg) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert(`Cuenta registrada con: ${emailReg}`);
    setForm("login");
  };

  const handleRecuperar = () => {
    alert(`Instrucciones enviadas a: ${emailRec}`);
    setForm("login");
  };

  return (
    <LinearGradient
      colors={["#fff4e6", "#ffb347"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.slogan}>Cocina fácil, vive mejor 🍲</Text>
          </View>

          {/* FORMULARIOS */}
          <View style={styles.form}>
            {form === "login" && (
              <>
                <Text style={styles.titulo}>Iniciar Sesión</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Correo o usuario"
                  placeholderTextColor="#b36b00"
                  value={emailLogin}
                  onChangeText={setEmailLogin}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#b36b00"
                  secureTextEntry
                  value={passwordLogin}
                  onChangeText={setPasswordLogin}
                />

                <TouchableOpacity style={styles.boton} onPress={handleLogin}>
                  <Text style={styles.textoBoton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setForm("registro")}>
                  <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setForm("recuperar")}>
                  <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
              </>
            )}

            {form === "registro" && (
              <>
                <Text style={styles.titulo}>Regístrate</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Correo electrónico"
                  placeholderTextColor="#b36b00"
                  value={emailReg}
                  onChangeText={setEmailReg}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#b36b00"
                  secureTextEntry
                  value={passwordReg}
                  onChangeText={setPasswordReg}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Confirmar contraseña"
                  placeholderTextColor="#b36b00"
                  secureTextEntry
                  value={confirmPasswordReg}
                  onChangeText={setConfirmPasswordReg}
                />

                <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
                  <Text style={styles.textoBoton}>Crear cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setForm("login")}>
                  <Text style={styles.link}>Volver al inicio de sesión</Text>
                </TouchableOpacity>
              </>
            )}

            {form === "recuperar" && (
              <>
                <Text style={styles.titulo}>Recuperar Contraseña</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Correo electrónico"
                  placeholderTextColor="#b36b00"
                  value={emailRec}
                  onChangeText={setEmailRec}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <TouchableOpacity
                  style={styles.boton}
                  onPress={handleRecuperar}
                >
                  <Text style={styles.textoBoton}>Enviar instrucciones</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setForm("login")}>
                  <Text style={styles.link}>Volver al inicio de sesión</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    width: 100,
    height: 100,
  },
  slogan: {
    marginTop: 8,
    fontSize: 16,
    fontStyle: "italic",
    color: "#b36b00",
  },
  form: {
    backgroundColor: "#fff9f0",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#b36b00",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 10,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#a05200",
  },
  input: {
    height: 50,
    backgroundColor: "#ffe6b3",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16,
    color: "#7a4b00",
    shadowColor: "#b36b00",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
  boton: {
    backgroundColor: "#ff9f00",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#cc7a00",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 12,
  },
  textoBoton: {
    color: "#5a3700",
    fontSize: 18,
    fontWeight: "700",
  },
  link: {
    color: "#b36b00",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
  },
});
