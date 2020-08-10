//==============================================================[ HEADER ]
import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
//---------------------------------------------------------------[ style ]
import styles from "./styles";

import backIcon from "../../assets/icons/back.png";
import logoImg from "../../assets/images/logo.png";
//---------------------------------------------------------------[ types ]
interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}
//================================================================[ BODY ]
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
