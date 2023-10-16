/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  Assistly1,
  Assistly2,
  SkillAnim3,
  logoDark,
} from 'app/assets/images/index';

const InformationScreen = ({navigation}) => {
  const carouselRef = useRef<Carousel | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const carouselItems = [
    {
      key: 'item1',
      content: (
        <View style={{flex: 1, width: screenWidth}}>
          <LottieView
            source={Assistly1}
            autoPlay
            loop
            style={{
              width: '100%',
              height: '80%',
              transform: [{scaleX: 2}, {scaleY: 2}],
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>
              Welcome to Your Volunteering Journey
            </Text>
            <Text style={styles.subtitleText}>
              Find the perfect project that aligns with your passion and skills.
            </Text>
          </View>
        </View>
      ),
    },
    {
      key: 'item2',
      content: (
        <View style={{flex: 1, width: screenWidth}}>
          <LottieView
            source={Assistly2}
            autoPlay
            loop
            style={{
              width: '100%',
              height: '80%',
              transform: [{scaleX: 2}, {scaleY: 2}],
            }}
          />
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.welcomeText}>
                Discover Meaningful Projects
              </Text>
              <Text style={styles.subtitleText}>
                Let your skills make a difference in meaningful projects.
              </Text>
            </View>
            <View style={styles.getStartedContainer}>
              <TouchableOpacity
                style={styles.getStartedButton}
                onPress={() => navigation.navigate('landing')}>
                <Text style={styles.getStartedButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ),
    },
  ];

  const renderItem = ({item}) => {
    return item.content;
  };

  const activeDotStyle = {
    height: 5,
    borderRadius: 5,
    width: 20,
    backgroundColor: '#05012F',
  };

  const inactiveDotStyle = {
    height: 5,
    borderRadius: 5,
    width: 10,
    backgroundColor: 'gray',
  };

  return (
    <View style={styles.container}>
      <Image
        source={logoDark}
        style={{
          width: 200,
          resizeMode: 'contain',
          marginHorizontal: 20,
          // maxHeight: 100,
        }}
      />
      <Carousel
        ref={carouselRef}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeSlide}
          dotStyle={activeDotStyle}
          inactiveDotStyle={inactiveDotStyle}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.6}
          tappableDots={true}
          carouselRef={carouselRef.current}
        />
      </View>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
  },
  welcomeText: {
    fontFamily: 'Dm Sans',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 12,
    marginVertical: 10,
    color: '#05012F',
  },
  subtitleText: {
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
    fontFamily: 'Dm Sans',
    color: '#05012F',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
  },
  getStartedContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },

  getStartedButton: {
    backgroundColor: '#05012F',
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },

  getStartedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
