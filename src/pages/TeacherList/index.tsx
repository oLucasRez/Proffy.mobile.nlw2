//==============================================================[ HEADER ]
import React from "react";
import { View } from "react-native";
//----------------------------------------------------------[ components ]
import PageHeader from "../../components/PageHeader";
//---------------------------------------------------------------[ style ]
import styles from "./styles";
//================================================================[ BODY ]
export default function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}
