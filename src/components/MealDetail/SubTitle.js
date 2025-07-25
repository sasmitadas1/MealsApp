import { View, Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e4b79bff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e4b79bff",
    borderBottomWidth: 2,
  },
});
