import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const WeekDaySelect = () => {
  return (
    <View>
      <View style={styles.block}>
        <WeekDay day="Seg" />
        <WeekDay day="Ter" />
        <WeekDay day="Qua" />
        <WeekDay day="Qui" />
        <WeekDay day="Sex" />
        <WeekDay day="Sáb" />
        <WeekDay day="Dom" />
      </View>
    </View>
  )
}

const WeekDay = ({ day }) => {
  const [selected, setSelected] = React.useState(false);

  if(selected === true) {
    return (
      <TouchableOpacity onPress={() => {
        setSelected(false);
        selectedWeekDays = selectedWeekDays.filter(item => item !== day);
      }}>
        <View style={styles.selected}>
          <Text style={styles.selectedText}>{ day }</Text>
        </View>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={() => {
        setSelected(true);
        selectedWeekDays.push(day);
      }}>
        <Text style={styles.text}>{ day }</Text>
      </TouchableOpacity>
    )
  }
}

let selectedWeekDays = new Array

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0093FF',
    width: "full",
    height: "auto",
    borderRadius: 28,
    marginBottom: 15,
    padding: 10,
    paddingBottom: 10,
    borderColor:'white',
    borderWidth: 1
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    margin: 10
  },
  selectedText: {
    color: 'black',
    fontWeight: 'bold',
    margin: 10
  },
  selected: {
    backgroundColor: 'white',
    borderRadius: 100,
  }
})

export {WeekDaySelect, selectedWeekDays};
