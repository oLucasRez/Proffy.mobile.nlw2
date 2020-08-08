//==============================================================[ HEADER ]
import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//---------------------------------------------------------------[ style ]
import styles from "./styles";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";
//================================================================[ BODY ]
export default function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigationBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Vamos lá</Text>
      </RectButton>
    </View>
  );
}
