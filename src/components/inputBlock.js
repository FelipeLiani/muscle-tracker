import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';

const InputBlock = ({ subtitle, inputs }) => {
  return (
    <View>
      <SubTitle content={ subtitle } />
      <View style={styles.block}>
        {Object.entries(inputs).map(([key, input]) => (
          <Input
            key={key}
            placeholder={input.placeholder}
            inputTitle={input.inputTitle}
            value={input.value}
            onChangeValue={input.onChangeValue}
          />
             ))}
      </View>
    </View>
  )
}

const Input = ({ inputTitle, placeholder, value, onChangeValue }) => {
  return(
    <View style={styles.option}>
     <View style={styles.name}>
       <View style={styles.label}>
         <Text style={styles.inputTitle}>{ inputTitle }</Text>
         <SafeAreaView style={styles.inputBlock}>
           <TextInput
             style={styles.input}
             onChangeText={ onChangeValue }
             value={ value }
             placeholder={ placeholder }
             placeholderTextColor='#2F4C61'
           />
         </SafeAreaView>
       </View>
     </View>
    </View>
  )
}

const SubTitle = ({ content }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#182631',
    width: "full",
    height: "auto",
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor:'white',
    borderWidth: 1
  },
  option: {
    flex: 1,
    minHeight: 50
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 45,
    marginLeft: 2,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'white',
    minWidth: 160,
    maxWidth: 260,
    borderRadius: 20
  },
  inputBlock: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 60
  },
  inputTitle: {
    color: '#5B94BE',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 350,
    height: 80,
    top: 50
  },
  titleText: {
    marginRight: 18,
    fontSize: 14,
    color: 'white'
  }
});

export default InputBlock;
