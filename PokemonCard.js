import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation, lang, setLang }) {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [fav, setFav] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setList(data.results));

    loadFav();
  }, []);

  const loadFav = async () => {
    const data = await AsyncStorage.getItem("fav");
    if (data) setFav(JSON.parse(data));
  };

  const toggleFav = async (name) => {
    let updated = [...fav];
    if (updated.includes(name)) {
      updated = updated.filter((p) => p !== name);
    } else {
      updated.push(name);
    }
    setFav(updated);
    await AsyncStorage.setItem("fav", JSON.stringify(updated));
  };

  const getId = (url) => url.split("/")[6];

  const filtered = list.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <LinearGradient colors={["#0f172a", "#020617"]} style={styles.container}>
      
      <Text style={styles.title}>pokidom</Text>

      {/* SEARCH */}
      <TextInput
        placeholder="Buscar Pokémon..."
        placeholderTextColor="#94a3b8"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* BATALLA */}
      <TouchableOpacity
        style={styles.battleBtn}
        onPress={() =>
          navigation.navigate("Battle", {
            playerTeam: [
              {
                name: "pikachu",
                sprites: {
                  front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                },
                stats: [{ base_stat: 35 }, { base_stat: 55 }],
              },
            ],
          })
        }
      >
        <Text style={{ fontWeight: "bold" }}>⚔️ Battle Mode</Text>
      </TouchableOpacity>

      {/* LISTA */}
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          const id = getId(item.url);
          const isFav = fav.includes(item.name);

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Pokemon", { id })}
              onLongPress={() => toggleFav(item.name)}
            >
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                }}
                style={styles.img}
              />
              <Text style={styles.name}>{item.name}</Text>
              {isFav && <Text style={{ color: "gold" }}>⭐</Text>}
            </TouchableOpacity>
          );
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },

  title: {
    fontSize: 34,
    color: "#38bdf8",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },

  search: {
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 12,
    color: "white",
    marginBottom: 10,
  },

  battleBtn: {
    backgroundColor: "#blue",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  card: {
    flex: 1,
    margin: 6,
    backgroundColor: "#1e293b",
    borderRadius: 15,
    alignItems: "center",
    padding: 15,
  },

  img: { width: 80, height: 80 },

  name: { color: "white", fontWeight: "bold" },
});