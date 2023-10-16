import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {menu, logo, prep, work} from '../../assets/images';

const HomeScreen = ({navigation}) => {
  const translation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Slide the text in from the left
    Animated.timing(translation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Fade in the text
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Rotate the text
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={prep} style={styles.img} />
      </View>

      <Animated.View style={[styles.descContainer, {opacity}]}>
        <Animated.Text
          style={[
            styles.description,
            {
              transform: [
                {
                  translateX: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 0], // Slide in from the left
                  }),
                },
                {
                  rotateY: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['180deg', '0deg'], // Flip from backward to forward
                  }),
                },
              ],
            },
          ]}>
          Connecting Talents with Purposeful Opportunities
        </Animated.Text>
      </Animated.View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('login')}>
        <Text style={styles.bttn}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05012F',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    padding: 10,
  },
  logoContainer: {
    width: 'auto',
    height: 'auto',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  menuBtn: {
    width: 32,
    height: 32,
  },
  descContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bttn: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  img: {
    width: 400,
    height: 400,
  },
});

export default HomeScreen;
