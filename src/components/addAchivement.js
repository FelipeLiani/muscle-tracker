import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const AddAchivement = () => {
  return(
    <TouchableOpacity style={styles.achivementItem}>
      <View style={styles.icon}>
        <Feather name='plus-circle' color='#00599f' size='60' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 94,
    width: 94,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#001F36',
    backgroundColor: '#001F36'
  },
  achivementItem: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 4
  }
})

export default AddAchivement