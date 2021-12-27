import React from "react";
import { Text, TouchableHighlight } from "react-native";
import Styles from "./Styles";

const AppButton = ({ title, onPress = () => {}, style }) => {
  return (
    <TouchableHighlight onPress={onPress} style={[Styles.Buttons, style]}>
      <Text style={Styles.ButtonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default AppButton;
