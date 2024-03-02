import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons';

const Option = ({ label, icon }) => {
  return (
    <TouchableOpacity style={styles.option}>
     <View style={styles.name}>
       <View style={styles.label}>
         <Feather name={ icon } color='white' size='20' />
         <Text style={styles.text}>{ label }</Text>
       </View>
       <View style={styles.icon}>
         <Feather name='chevrons-right' color='white' size='25' />
       </View>
     </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    minHeight: 50,
    //backgroundColor:'green'
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    paddingLeft: 10,
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  icon: {
   paddingRight: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 18
  }
})

export default Option;
