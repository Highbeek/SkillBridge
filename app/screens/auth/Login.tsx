import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePasswordChange = text => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View
          style={styles.txtContainer}
          onPress={() => navigation.push('signup')}>
          <Text style={{color: '#fff'}}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.push('signup')}>
            <Text style={{color: 'gray', fontWeight: '600'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logn}>
          <Text style={styles.loginTxt}>Sign In</Text>
        </View>
        <View style={styles.signInContainer}>
          <View style={styles.userContainer}>
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
              placeholder="Enter your password here"
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.forgetPassword}>Forget Password ?</Text>
        </View>
        {/* Move the "Sign In" button outside of the signInContainer */}
      </View>
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.btn}>Sign In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

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
  headerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  logn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  loginTxt: {
    fontSize: 30,
    color: '#fff',
  },
  signInContainer: {
    marginTop: 50,
    height: 400,
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
  forgetPassword: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 'auto',
  },
  signInBtn: {
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
