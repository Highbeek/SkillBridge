import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {user, comapany, back} from '../assets/images';

const User = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.txtCover}>
        <Text style={styles.usersTxt}>Who are you?</Text>
      </View>

      <View style={styles.userCover}>
        <View style={styles.userRow}>
          <TouchableOpacity style={styles.userContainer}>
            <Image source={comapany} style={styles.icon} />
            <Text style={styles.userTxt}>Company</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userContainer}>
            <Image source={user} style={styles.icon} />
            <Text style={styles.userTxt}>Candidate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  txtCover: {
    marginRight: 'auto',
    marginVertical: 20,
  },
  usersTxt: {
    fontSize: 40,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  userCover: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  userContainer: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    gap: 10,
    backgroundColor: '#05012F',
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  userTxt: {
    color: '#fff',
    fontWeight: '700',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05012F',
    marginRight: 'auto',
    marginVertical: 10,
  },
});
