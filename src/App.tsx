import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Animated,
  Easing,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import diceOne from '../assets/diceOne.png';
import diceTwo from '../assets/diceTwo.png';
import diceThree from '../assets/diceThree.png';
import diceFour from '../assets/diceFour.png';
import diceFive from '../assets/diceFive.png';
import diceSix from '../assets/diceSix.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Animated.Image style={[styles.diceImage]} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceFive);

  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    switch (randomNumber) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;

      default:
        setDiceImage(diceOne);
        break;
    }
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.tapBtn}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },

  tapBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  animateDice: {},
});
