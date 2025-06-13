// hooks/useFavoritos.ts
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITOS_KEY = "@favoritos";

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem(FAVORITOS_KEY);
      if (json) setFavoritos(JSON.parse(json));
    })();
  }, []);

  const toggleFavorito = async (id: number) => {
    let nuevosFavoritos;
    if (favoritos.includes(id)) {
      nuevosFavoritos = favoritos.filter((favId) => favId !== id);
    } else {
      nuevosFavoritos = [...favoritos, id];
    }
    setFavoritos(nuevosFavoritos);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(nuevosFavoritos));
  };

  return { favoritos, toggleFavorito };
}
