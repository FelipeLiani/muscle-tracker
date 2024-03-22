import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from "../components/title";
import InputBlock from '../components/inputBlock';
import WeekDaySelect from '../components/weekDaySelect';

export default function CustomCreation({ navigation }) {
  const [titleValue, onChangeTitleValue] = React.useState('Treino A');
  const [descriptionValue, onChangeDescriptionValue] = React.useState('');
  // const [weekdayValue, onChangeWeekdayValue] = React.useState('');

  const Inputs = {
    input1: {
      placeholder: 'placeholder',
      inputTitle: 'titulo',
      value: titleValue,
      onChangeValue: onChangeTitleValue
    },
    input2: {
      placeholder: '(opcional)',
      inputTitle: 'descrição',
      value: descriptionValue,
      onChangeValue: onChangeDescriptionValue
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
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  inputBlock: {
    marginTop: -60
  }
})
