/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {logoWhite} from 'app/assets/images';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Image
        source={logoWhite}
        style={{
          width: 300,
          resizeMode: 'contain',
          marginHorizontal: 20,
          alignSelf: 'center',
          marginVertical: 20,
        }}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.bttnTxt}>Create an account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bttn}>
          <Text style={styles.bttnTxt}>I have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#05012F',
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  bttn: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  bttnTxt: {
    color: '#05012F',
    fontWeight: 'bold',
    fontFamily: 'Dm Sans',
  },
});
