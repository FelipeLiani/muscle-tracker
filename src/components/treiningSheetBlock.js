import { StyleSheet, View, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

const TreiningSheetBlock = () => {
  return (
    <View style={styles.block}>
      <View style={styles.weekBlock}>
        <Feather style={styles.weekIcon} name='calendar' color='white' size='14' />
        <Text style={styles.text}>Segunda, Quinta, Sexta, Sabado</Text>
      </View>
      <Text style={styles.title}>Treino A</Text>
      <Text style={styles.text}>peitorais e ombro</Text>
      <View style={styles.iconsBlock}>
        <Image
          source={require('../../assets/Muscles Icon Pack/Chest muscle.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/Muscles Icon Pack/Shoulder muscle.png')}
          style={styles.icon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'top',
    backgroundColor: '#013962',
    width: "full",
    height: 180,
    marginTop: 12,
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    alignItems: 'flex-start'
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 24
  },
  weekBlock: {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#285C82',
    maxHeight: 26
  },
  weekIcon: {
    marginRight: 4
  },
  iconsBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 18
  },
  icon: {
    marginRight: 10,
    height: 60,
    width: 60
  }
})

export default TreiningSheetBlock;
