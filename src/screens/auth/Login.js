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
import { login } from "@reduxActions/authActions"
import {
  setModalVisibility,
  setModalData,
} from "@reduxActions/authModalActions"

const Login = ({ login, setModalVisibility, setModalData }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const otorityError = true

  const loggedIn = () => {
    // Uncomment this if you want to check otority error
    // if (otorityError == true) {
    //   setModalVisibility(true);
    //   setModalData({
    //     type: "invalidOtority",
    //     message: "Perubahan Otorisasi",
    //     messageTwo:
    //       "Kamu login beda ofdeling & data akan dihapus. Yakin ingin melanjutkan?",
    //   });
    // }

    // Simple credentials check
    // This for testing only
    if (!username || !password) {
      setModalVisibility(true)
      setModalData({ type: "invalidCreds", message: "Isi semua form" })
    } else {
      // Check if username and password is match.
      if (username == "admin" && password == "admin") {
        login({ username, password })
      } else if (username != "admin") {
        setModalVisibility(true)
        setError("username")
        setModalData({
          type: "invalidUsername",
          message: "Username Salah",
          messageTwo: "Coba cek ulang Username kamu ya",
        })
      } else if (password != "admin") {
        setModalVisibility(true)
        setError("password")
        setModalData({
          type: "invalidPassword",
          message: "Kata Sandi Salah",
          messageTwo: "Coba cek ulang Kata Sandi kamu ya",
        })
      } else {
        setModalVisibility(true)
      }
    }
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
            {error && error === "username" ? (
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
              onChangeText={(username) => setUsername(username)}
              autoCapitalize='none'
              autoCorrect={false}
              style={[
                globalStyles.input,
                error && error === "username" ? globalStyles.inputError : null,
              ]}
            />
          </View>

          <View>
            {/* Icons */}
            {error && error === "password" ? (
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
              onChangeText={(password) => setPassword(password)}
              autoCapitalize='none'
              autoCorrect={false}
              style={[
                globalStyles.input,
                error === "password" ? globalStyles.inputError : null,
              ]}
            />
          </View>

          <Text style={globalStyles.mb2} />

          <TouchableOpacity style={globalStyles.btn} onPress={loggedIn}>
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

export default connect(null, { login, setModalVisibility, setModalData })(Login)
