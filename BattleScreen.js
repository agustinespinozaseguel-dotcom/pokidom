import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function WikiScreen() {
  const regiones = [
    {
      nombre: "Kanto",
      emoji: "🌎",
      descripcion:
        "Kanto es la primera región del mundo Pokémon. Aquí comienza la aventura de muchos entrenadores y se encuentran Pokémon clásicos como Pikachu, Charmander y Bulbasaur.",
    },
    {
      nombre: "Johto",
      emoji: "🏯",
      descripcion:
        "Johto se inspira en la cultura tradicional japonesa. Introdujo Pokémon legendarios como Lugia y Ho-Oh.",
    },
    {
      nombre: "Hoenn",
      emoji: "🌊",
      descripcion:
        "Hoenn destaca por sus grandes rutas marítimas y por los legendarios Groudon, Kyogre y Rayquaza.",
    },
    {
      nombre: "Sinnoh",
      emoji: "⛰️",
      descripcion:
        "Sinnoh es una región montañosa donde habitan Pokémon legendarios relacionados con el tiempo y el espacio.",
    },
    {
      nombre: "Unova",
      emoji: "🏙️",
      descripcion:
        "Unova está inspirada en Nueva York y presenta una Pokédex completamente nueva.",
    },
    {
      nombre: "Kalos",
      emoji: "🗼",
      descripcion:
        "Kalos se inspira en Francia y fue la región donde apareció la megaevolución.",
    },
    {
      nombre: "Alola",
      emoji: "🏝️",
      descripcion:
        "Alola está formada por varias islas tropicales y presenta formas regionales de muchos Pokémon.",
    },
    {
      nombre: "Galar",
      emoji: "⚙️",
      descripcion:
        "Galar está inspirada en el Reino Unido e introdujo las formas Gigamax.",
    },
    {
      nombre: "Paldea",
      emoji: "🌅",
      descripcion:
        "Paldea está inspirada en la península ibérica y es la región de Pokémon Escarlata y Púrpura.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        📚 PokéWiki
      </Text>

      <Text style={styles.subtitle}>
        Regiones Pokémon
      </Text>

      {regiones.map((region) => (
        <View
          key={region.nombre}
          style={styles.card}
        >
          <Text style={styles.regionTitle}>
            {region.emoji} {region.nombre}
          </Text>

          <Text style={styles.description}>
            {region.descripcion}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 15,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    color: "#FFD700",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  regionTitle: {
    color: "#FFD700",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 24,
  },
});