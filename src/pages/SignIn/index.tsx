import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const SignIn = () => {
  return (
    <View>
      <Text style={styles.text}>SignIn Page</Text>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: '#020202',
    top: 37,
    left: 27,
    fontFamily: 'Poppins-Medium',
  },
});
