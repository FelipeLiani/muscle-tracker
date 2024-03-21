import React from 'react';
import { View, TouchableOpacity, ScrollView } from "react-native";
import { GlobalStyles } from "../../styles/global.styles";
import { Feather } from '@expo/vector-icons';
import Title from "../components/title";
import InputBlock from '../components/inputBlock';


export default function CustomCreation({ navigation }) {
  const [titleValue, onChangeTitleValue] = React.useState('Treino A');
  const [descriptionValue, onChangeDescriptionValue] = React.useState('');
  const [weekdayValue, onChangeWeekdayValue] = React.useState('');

  const Inputs = {
    input1: {
      placeholder: 'placeholder',
      inputTitle: 'titulo',
      icon: 'type',
      value: titleValue,
      onChangeValue: onChangeTitleValue
    },
    input2: {
      placeholder: 'placeholder',
      inputTitle: 'descrição',
      icon: 'paperclip',
      value: descriptionValue,
      onChangeValue: onChangeDescriptionValue
    },
    input3: {
      placeholder: '',
      inputTitle: 'dia(s) da semana',
      icon: 'calendar',
      value: weekdayValue,
      onChangeValue: onChangeWeekdayValue
    },
  }

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
      <InputBlock inputs={Inputs} subtitle="subtitulo" />
    </ScrollView>
  </View>
  )
}
