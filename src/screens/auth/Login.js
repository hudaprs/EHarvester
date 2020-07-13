import React, { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native"

// SVG
import LandingHeader from "@imgs/landing/LandingHeader.svg"
import Username from "@imgs/auth/Username.svg"
import Password from "@imgs/auth/Password.svg"
import UsernameErrorIcon from "@imgs/auth/UsernameErrorIcon.svg"
import PasswordErrorIcon from "@imgs/auth/PasswordErrorIcon.svg"

// Components
import AuthModal from "@components/modals/AuthModal"

// Global Styles
import { globalStyles } from "@globalStyles/global"

// Redux
import { connect } from "react-redux"
import { login, setUserData } from "@reduxActions/authActions"

const Login = ({ userData, login, setUserData, errorType, loading }) => {
  const { username, password } = userData

  const loggedIn = () => {
    login(userData)
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView>
        {/* Auth Modal */}
        <AuthModal />

        {/* Header */}
        <LandingHeader style={styles.loginImage} />

        {/* Body */}
        <Text style={styles.loginTitle}>Masuk</Text>
        <Text style={styles.loginSubTitle}>
          Silahkan isi Username dan Kata Sandi anda
        </Text>

        {/* Forms */}
        <View style={globalStyles.mt4}>
          <View>
            {/* Username Icons */}
            {errorType && errorType === "username" ? (
              <UsernameErrorIcon
                style={globalStyles.inputIcon}
                width={15}
                height={15}
              />
            ) : (
              <Username style={globalStyles.inputIcon} width={15} height={15} />
            )}
            <TextInput
              placeholder='Username'
              placeholderTextColor='#233258'
              onChangeText={(username) =>
                setUserData({ ...userData, username })
              }
              value={username}
              autoCapitalize='none'
              autoCorrect={false}
              style={[
                globalStyles.input,
                errorType && errorType === "username"
                  ? globalStyles.inputError
                  : null,
              ]}
            />
          </View>

          <View>
            {/* Icons */}
            {errorType && errorType === "password" ? (
              <PasswordErrorIcon
                style={globalStyles.inputIcon}
                width={15}
                height={15}
              />
            ) : (
              <Password style={globalStyles.inputIcon} width={15} height={15} />
            )}
            <TextInput
              placeholder='Kata Sandi'
              placeholderTextColor='#233258'
              secureTextEntry={true}
              onChangeText={(password) =>
                setUserData({ ...userData, password })
              }
              value={password}
              autoCapitalize='none'
              autoCorrect={false}
              style={[
                globalStyles.input,
                errorType && errorType === "password"
                  ? globalStyles.inputError
                  : null,
              ]}
            />
          </View>

          <Text style={globalStyles.mb2} />

          <TouchableOpacity
            style={[globalStyles.btn, loading ? globalStyles.btnLoading : null]}
            onPress={loggedIn}
            disabled={loading}
          >
            <Text style={globalStyles.btnText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.loginFooter}>
        <Text style={styles.loginFooterText}>APK Version 1.0.0</Text>
        <Text style={styles.loginFooterText}>
          (C) 2020. PT. Triputra Agro Persada
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loginTitle: {
    fontFamily: "Poppins-Medium",
    fontWeight: "400",
    fontSize: 36,
    alignSelf: "flex-start",
    marginTop: 60,
    color: "#233258",
  },
  loginSubTitle: {
    fontFamily: "Poppins-Medium",
    opacity: 0.4,
  },
  loginFooterText: {
    opacity: 0.25,
    color: "#233258",
    textAlign: "center",
  },
})

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
  errorType: state.auth.errorType,
  loading: state.auth.loading,
})

export default connect(mapStateToProps, {
  login,
  setUserData,
})(Login)
