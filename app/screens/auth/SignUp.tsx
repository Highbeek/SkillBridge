import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.txtContainer}>
          <Text style={{color: '#fff'}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('login')}>
            <Text style={{color: 'gray', fontWeight: '600'}}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <View style={styles.userContainer}>
            <Text style={styles.inputTitle}>Name:</Text>
            <TextInput
              editable
              numberOfLines={1}
              maxLength={40}
              onChangeText={handleNameChange}
              value={name}
              placeholder="Enter your name"
              style={styles.input}
            />
            <Text style={styles.inputTitle}>Email:</Text>
            <TextInput
              editable
              numberOfLines={1}
              maxLength={40}
              onChangeText={handleEmailChange}
              value={email}
              placeholder="Enter your email address"
              style={styles.input}
            />
            <Text style={styles.inputTitle}>Password:</Text>
            <TextInput
              editable
              maxLength={40}
              onChangeText={handlePasswordChange}
              value={password}
              placeholder="Create a password"
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.push('')}>
        <Text style={styles.btn}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05012F',
  },
  content: {
    flex: 1,
  },
  txtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  signUpContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff2b2',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  userContainer: {
    paddingVertical: 30,
    gap: 5,
  },
  input: {
    height: 60,
    borderColor: '#000000',
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputTitle: {
    marginTop: 10,
    padding: 10,
  },
  signUpBtn: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  btn: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
