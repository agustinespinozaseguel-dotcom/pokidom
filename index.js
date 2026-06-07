import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function PokemonScreen({ route, lang }) {
  const { id } = route.params;
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPoke(data));
  }, []);

  if (!poke) return <Text style={{ color: "white" }}>Loading...</Text>;

  const getRarity = (id) => {
    if (id % 50 === 0) return "LEGENDARY ⭐⭐⭐";
    if (id % 10 === 0) return "SHINY ✨";
    if (id > 100) return "RARE 🔵";
    return "COMMON ⚪";
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: poke.sprites.other["official-artwork"].front_default,
          }}
          style={styles.img}
        />

        <Text style={styles.name}>{poke.name.toUpperCase()}</Text>

        <Text style={styles.rarity}>{getRarity(id)}</Text>

        <Text style={styles.text}>
          HP: {poke.stats[0].base_stat} | ATK: {poke.stats[1].base_stat}
        </Text>

        <Text style={styles.text}>
          Types: {poke.types.map((t) => t.type.name).join(", ")}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
  },

  img: { width: 220, height: 220 },

  name: { color: "white", fontSize: 24, fontWeight: "bold" },

  rarity: { color: "gold", marginTop: 5 },

  text: { color: "#cbd5e1", marginTop: 5 },
});