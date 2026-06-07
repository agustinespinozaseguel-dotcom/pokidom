import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PokemonScreen from "./screens/PokemonScreen";
import BattleScreen from "./screens/BattleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [lang, setLang] = useState("es");

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} lang={lang} setLang={setLang} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Pokemon">
          {(props) => (
            <PokemonScreen {...props} lang={lang} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Battle" component={BattleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}