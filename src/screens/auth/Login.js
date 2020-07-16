import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// SVG
import LandingHeader from '@imgs/landing/LandingHeader.svg';
import Username from '@imgs/auth/Username.svg';
import Password from '@imgs/auth/Password.svg';
import UsernameErrorIcon from '@imgs/auth/UsernameErrorIcon.svg';
import PasswordErrorIcon from '@imgs/auth/PasswordErrorIcon.svg';

// Components
import AuthModal from '@components/modals/AuthModal';
import PoppinsMedium from '@components/text/PoppinsMedium';
import PoppinsRegular from '@components/text/PoppinsRegular';

// Global Styles
import { globalStyles } from '@globalStyles/global';

// Redux
import { connect } from 'react-redux';
import { login, setUserData } from '@reduxActions/authActions';

const Login = ({ userData, login, setUserData, errorType, loading }) => {
  const { username, password } = userData;

  const {
    container,
    mb2,
    mb4,
    inputGroup,
    input,
    inputIcon,
    inputError,
    btn,
    btnLoading,
    btnText,
  } = globalStyles;

  const {
    loginHeader,
    loginTitle,
    loginSubTitle,
    loginBody,
    loginFooterText,
    loginFooter,
  } = styles;

  const loggedIn = () => {
    login(userData);
  };

  return (
    <View style={container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      >
        {/* Auth Modal */}
        <AuthModal />

        {/* Header */}
        <View style={loginHeader}>
          <LandingHeader />
        </View>

        {/* Forms */}
        <View style={[loginBody]}>
          <View style={mb4}>
            <PoppinsMedium style={loginTitle}>Masuk</PoppinsMedium>
            <PoppinsMedium style={loginSubTitle}>
              Silahkan isi Username dan Kata Sandi anda
            </PoppinsMedium>
          </View>

          <View style={inputGroup}>
            {/* Username Icons */}
            {errorType && errorType === 'username' ? (
              <UsernameErrorIcon style={inputIcon} width={15} height={15} />
            ) : (
              <Username style={inputIcon} width={15} height={15} />
            )}
            <TextInput
              placeholder="Username"
              placeholderTextColor="#233258"
              onChangeText={(username) =>
                setUserData({ ...userData, username })
              }
              value={username}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                input,
                errorType && errorType === 'username' ? inputError : null,
              ]}
            />
          </View>

          <View stle={inputGroup}>
            {/* Icons */}
            {errorType && errorType === 'password' ? (
              <PasswordErrorIcon style={inputIcon} width={15} height={15} />
            ) : (
              <Password style={inputIcon} width={15} height={15} />
            )}
            <TextInput
              placeholder="Kata Sandi"
              placeholderTextColor="#233258"
              secureTextEntry={true}
              onChangeText={(password) =>
                setUserData({ ...userData, password })
              }
              value={password}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                input,
                errorType && errorType === 'password' ? inputError : null,
              ]}
            />
          </View>

          <View style={mb2} />

          <TouchableOpacity
            style={[btn, loading ? btnLoading : null]}
            onPress={loggedIn}
            disabled={loading}
          >
            <Text style={btnText}>Masuk</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={loginFooter}>
          <PoppinsRegular style={loginFooterText}>
            APK Version 1.0.0
          </PoppinsRegular>
          <PoppinsRegular style={loginFooterText}>
            (C) 2020. PT. Triputra Agro Persada
          </PoppinsRegular>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginHeader: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  loginBody: {
    justifyContent: 'center',
  },
  loginTitle: {
    fontWeight: '400',
    fontSize: 36,
    color: '#233258',
  },
  loginSubTitle: {
    opacity: 0.4,
  },
  loginFooter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginFooterText: {
    opacity: 0.25,
    color: '#233258',
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
  errorType: state.auth.errorType,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {
  login,
  setUserData,
})(Login);
