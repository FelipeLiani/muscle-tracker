import { StyleSheet, Image } from "react-native";

class Exercise {
  constructor(name, isExercicioDeMusculacao, muscleGroups, path) {
    this.name = name;
    this.isExercicioDeMusculacao = isExercicioDeMusculacao;
    this.muscleGroups = muscleGroups;
    this.path = path;
  }

  renderLittleIcon() {
    return (
      <Image
        source={this.path}
        style={styles.littleIcon}
      />
    );
  }

  renderBigIcon() {
    return (
      <Image
        source={this.path}
        style={styles.bigIcon}
      />
    );
  }
}

const styles = StyleSheet.create({
  littleIcon: {
    height: 94,
    width: 94,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#001F36'
  },
  bigIcon: {
    height: 200,
    width: 200,
  },
});

export default Exercise;
