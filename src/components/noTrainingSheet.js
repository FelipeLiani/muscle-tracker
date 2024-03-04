import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const NoTrainingSheet = () => {
  return (
    <View style={styles.conteiner}>
     <Image
       source={require('../../assets/no-treining-sheet.png')}
       style={styles.icon}
     />
     <Text style={styles.text}>Não há nenhuma ficha</Text>
     <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Criar ficha</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    alignItems: 'center',
    paddingTop: 100
  },
  text: {
    color: '#808080',
    marginTop: 25,
    fontSize: 20
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2012A',
    marginTop: 25
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  icon: {
    height: 120,
    width: 120
  }
})

export default NoTrainingSheet;
