import React from "react";
import { Text, View } from "react-native";
import Styles from "./Styles";
import AppButton from "../../components/AppButton/AppButton";
const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>This Is The Home.js</Text>
      <View style={{ padding: 20 }}></View>
      <AppButton
        title={"Go To AppSettings"}
        onPress={() => navigation.navigate("AppSettings")}
      />
      <View style={{ padding: 20 }}></View>
      <AppButton
        title={"Go To AppDetails"}
        onPress={() => navigation.navigate("AppDetails")}
      />
    </View>
  );
};

export default Home;
