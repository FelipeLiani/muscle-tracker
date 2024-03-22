import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const WeekDaySelect = () => {
  return (
    <View>
      <View style={styles.block}>
        <TouchableOpacity><Text style={styles.text}>Seg</Text></TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.selected}>
            <Text style={styles.selectedText}>Ter</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>Qua</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>Qui</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>Sex</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>Sáb</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>Dom</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#182631',
    width: "full",
    height: 80,
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
    paddingBottom: 10,
    borderColor:'white',
    borderWidth: 1
  },
  text: {
    color: 'white',
    margin: 10
  },
  selectedText: {
    color: 'black',
    margin: 10
  },
  selected: {
    backgroundColor: 'white',
    borderRadius: 100
  }
})

export default WeekDaySelect;
