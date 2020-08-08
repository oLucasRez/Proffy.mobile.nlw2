//==============================================================[ HEADER ]
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
//----------------------------------------------------------[ components ]
import AppStack from "./src/routes/AppStack";
//---------------------------------------------------------------[ style ]
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
//================================================================[ BODY ]
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <>
      <AppStack />
      <StatusBar style="light" />
    </>
  );
}
