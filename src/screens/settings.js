import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/title';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Title content="Configurações" />
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(2, 4, 15)',
    minHeight: 'full',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
