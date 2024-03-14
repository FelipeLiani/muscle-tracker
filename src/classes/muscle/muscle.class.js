import { Image, StyleSheet } from "react-native";

class Muscle {
  constructor(name, iconPath) {
    this.name = name;
    this.iconPath = iconPath;
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
  cardIcon: {
    margin: 5,
    height: 60,
    width: 60
  }
})

export default Muscle;
