import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from "../components/title";
import InputBlock from '../components/inputBlock';
import { trainingSheetModel } from '../sqlite/models/trainingsheets.model';
import { WeekDaySelect, selectedWeekDays } from '../components/weekDaySelect';

export default function CustomCreation({ navigation }) {
  const [titleValue, setTitleValue] = React.useState('Treino A');
  const [descriptionValue, setDescriptionValue] = React.useState('');

  async function saveNew() {
    const dataToSave = {
      title: titleValue,
      description: descriptionValue,
      selectedWeekDays: JSON.stringify(selectedWeekDays)
    }
    try {
      await trainingSheetModel.create(dataToSave)
    } catch(err) {
      console.log(err)
    }
  }

  const Inputs = {
    input1: {
      placeholder: 'placeholder',
      inputTitle: 'título',
      value: titleValue,
      onChangeValue: setTitleValue
    },
    input2: {
      placeholder: '(opcional)',
      inputTitle: 'descrição',
      value: descriptionValue,
      onChangeValue: setDescriptionValue
    }
  };

  return (
    <View style={GlobalStyles.columnLayout}>
    <View style={GlobalStyles.headerLeft}>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {navigation.navigate("creation choice")}}
        >
          <Feather name='chevron-left' color='white' size='25' />
        </TouchableOpacity>
    </View>
    <Title content={ titleValue }/>
    <ScrollView style={GlobalStyles.main}>
      <View style={styles.inputBlock}>
        <InputBlock inputs={Inputs} />
      </View>
      <WeekDaySelect />
      <TouchableOpacity onPress={saveNew} style={styles.button}>
        <Text>Clique me</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  inputBlock: {
    marginTop: -60
  },
  button: {
    backgroundColor: 'white'
  }
})
