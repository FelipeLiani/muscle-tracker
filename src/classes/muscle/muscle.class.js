import { Image, StyleSheet } from "react-native";

class Muscle {
  constructor(name, iconPath) {
    this.name = name;
    this.iconPath = iconPath;
  }

  renderLittleIcon() {
    return (
      <Image
        source={this.iconPath}
        style={styles.littleIcon}
      />
    )
  }

  renderCardIcon() {
    return(
      <Image
        source={this.iconPath}
        style={styles.cardIcon}
      />
    )
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
  cardIcon: {
    margin: 5,
    height: 60,
    width: 60
  }
})

export default Muscle;
