import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { exercises } from "../classes/exercise/exercise.instances";
import { muscles } from "../classes/muscle/muscle.instances";
import { Feather } from '@expo/vector-icons';

const UserBlock = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.block}>
        <View style={styles.userRow}>
          <TouchableOpacity style={styles.userIcon} />
          <TouchableOpacity style={styles.userDataBlock}>
            <View style={styles.userData}>
              <Text style={styles.userDataValue}>1.75m</Text>
              <Text style={styles.userDataTitle}>Altura</Text>
            </View>
            <View style={styles.userData}>
              <Text style={styles.userDataValue}>90kg</Text>
              <Text style={styles.userDataTitle}>Peso</Text>
            </View>
            <View style={styles.userData}>
              <Text style={styles.userDataValue}>16%</Text>
              <Text style={styles.userDataTitle}>BF</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.achievementsRow}>
          <AddAchivement />
          <AddAchivement />
          <AddAchivement />
        </View>
      </View>
    </View>
  )
};

const Achivement = ({ renderFunction, value }) => {
  return (
    <TouchableOpacity style={styles.achivementItem}>
      {renderFunction}
      <Text style={styles.achivementValue}>{ value }</Text>
    </TouchableOpacity>
  )
};

const AddAchivement = () => {
  return(
    <TouchableOpacity style={styles.achivementItem}>
      <View style={styles.addIcon}>
        <Feather name='plus-circle' color='#285C82' size='60' />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  conteiner: {
    width: 350,
    height: 60,
    top: 50,
    marginBottom: 10,
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 'full',
    height: 242,
    backgroundColor: '#013962',
    marginTop: 5,
    borderRadius: 20
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  achievementsRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#002846',
    alignItems: 'top',
    width: 320,
    height: 'auto',
    borderRadius: 20,
    padding: 8,
    marginTop: 12
  },
  achivementItem: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 4
  },
  achivementValue: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 2
  },
  userIcon: {
    backgroundColor: 'green',
    width: 70,
    height: 70,
    borderRadius: 100
  },
  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 94,
    width: 94,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#001F36',
    backgroundColor: '#001F36'
  },
  userDataBlock: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#285C82',
    borderRadius: 14,
    marginLeft: 12,
    width: 230,
    height: 68,
    paddingTop: 2
  },
  userData: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 8,
  },
  userDataValue: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  userDataTitle: {
    color: 'white',
    marginTop: 8
  }
})

export default UserBlock;
