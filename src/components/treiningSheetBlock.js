import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { exercises } from "../classes/exercise/exercise.instances";
import { muscles } from "../classes/muscle/muscle.instances";

const TreiningSheetBlock = () => {
  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.weekBlock}>
          <Feather style={styles.weekIcon} name='calendar' color='white' size='14' />
           <Text style={styles.text}>Segunda, terça, quarta</Text>
        </TouchableOpacity>
        <View style={styles.threeDots}>
          <TouchableOpacity style={styles.edit}>
            <Feather name="edit-2" size="20" color='#285C82' />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Treino A</Text>
      <Text style={styles.text}>peitorais e ombro</Text>
      <TouchableOpacity style={styles.iconsBlock}>
        {muscles.peitorais.renderCardIcon()}
        {muscles.dorsais.renderCardIcon()}
        {muscles.deltoides.renderCardIcon()}
        {muscles.triceps.renderCardIcon()}
      </TouchableOpacity>
    </TouchableOpacity>
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
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#285C82',
    maxHeight: 26,
    maxWidth: 'auto'
  },
  weekIcon: {
    marginRight: 4
  },
  iconsBlock: {
    minHeight: 40,
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002846',
    borderRadius: 10
  },
  icon: {
    marginRight: 10,
    height: 60,
    width: 60
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
   // backgroundColor: 'blue'
  },
  threeDots: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    maxWidth: '100%',
    //backgroundColor: 'green'
  },
  edit: {
    backgroundColor: '#002846',
    marginRight: 6,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 40,
    width: 40
  }
})

export default TreiningSheetBlock;
