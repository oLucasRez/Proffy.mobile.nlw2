//==============================================================[ HEADER ]
import React from "react";
import { View } from "react-native";
//----------------------------------------------------------[ components ]
import PageHeader from "../../components/PageHeader";
//---------------------------------------------------------------[ style ]
import styles from "./styles";
//================================================================[ BODY ]
export default function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}
