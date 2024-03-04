import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  columnLayout: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(2, 4, 15)',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 350,
    maxHeight: 65,
    top: 50,
    marginBottom: 10
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    width: 350,
    maxHeight: 65,
    top: 50,
    marginBottom: 10
  },
 // titleView: {
   // width: 350,
   // height: 100,
  //  top: 50,
  //  marginBottom: 10
  // },
  main: {
    flex: 1,
    flexDirection: 'column',
    width: 350,
    maxHeight: "auto",
    top: 50,
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000910',
    marginRight: 8,
    borderRadius: 100,
    maxWidth: 70,
    height: 70,
  },
  //optionBar: {
    //backgroundColor: 'white',
    //width: 'full',
    //height: 0.5,
    //}
})
