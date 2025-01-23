import { Text, View, StyleSheet } from "react-native";
import Header from './header'

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#151218",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Text style={{ color: '#E8E0E8' }}>Começo do app.</Text>
    </View>
  );
}
g