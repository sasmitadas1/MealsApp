import {Pressable, StyleSheet, Text, View} from 'react-native';

function CategoryGridTitle({title, color, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={styles.button}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
