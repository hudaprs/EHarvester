import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

// SVG
import ArrowLeft from '@imgs/ArrowLeft.svg'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },

  // Margins
  mt4: {
    marginTop: 40,
  },
  mt3: {
    marginTop: 30,
  },
  mt2: {
    marginTop: 20,
  },
  mt1: {
    marginTop: 10,
  },

  mb4: {
    marginBottom: 40,
  },
  mb3: {
    marginBottom: 30,
  },
  mb2: {
    marginBottom: 20,
  },
  mb1: {
    marginBottom: 10,
  },

  // Buttons
  btn: {
    backgroundColor: 'rgba(64, 123, 255, 1)',
    height: 40,
    borderRadius: 6,
  },
  btnText: {
    marginTop: 8,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#fff',
  },
  btnOutLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 20,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 10,
  },
  btnOutLineText: {
    color: '#000',
    fontSize: 12,
  },
  btnOutLinePrimary: {
    borderColor: '#407BFF',
  },
  btnOutLineTextPrimary: {
    color: '#407BFF',
  },
  btnLoading: {
    backgroundColor: 'rgba(64, 123, 255, .5)',
  },

  // Boxes
  box: {
    resizeMode: 'cover',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#829CD0',
    shadowOpacity: 2,
    shadowRadius: 0,
    shadowOffset: { width: 3, height: 3 },
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginBottom: 20,
    elevation: 3,
  },
  boxPrimary: {
    backgroundColor: 'rgba(130, 156, 208, 0.1)',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
  },
  boxBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxCheckBoxInput: {
    marginRight: 10,
  },
  boxTitle: {
    color: '#407BFF',
    fontSize: 14,
  },
  boxSubTitle: {
    color: '#3F3F3F',
    fontSize: 12,
    opacity: 0.7,
  },
  textWrap: {
    flexDirection: 'column',
    flex: 0.9,
  },

  // Badges
  badge: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    fontSize: 10,
  },
  badgePrimary: {
    backgroundColor: '#79A2FF',
  },

  // Text
  textPrimary: {
    color: '#407BFF',
    fontSize: 14,
  },
  textSecondary: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#233258',
  },
  textAlternative: {
    opacity: 0.4,
    fontSize: 12,
  },

  // Modals
  closeModalIcon: {
    color: '#3F3F3F',
    marginLeft: 'auto',
  },

  // Inputs
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    width: '100%',
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 50,
    fontSize: 12,
    backgroundColor: '#F0F5FF',
    borderRadius: 6,
    opacity: 0.8,
  },
  inputIcon: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: 20,
    marginTop: 10,
  },
  inputError: {
    backgroundColor: 'rgba(249, 104, 106, .3)',
    color: 'rgba(249, 104, 106, 1)',
  },
})

// Device Size
export const deviceSize = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
}

// Stack Screen Options Style
export const screenOptionStyles = {
  headerTintColor: '#3F3F3F',
  headerTitleStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  headerStyle: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: 'center',
  headerBackImage: () => <ArrowLeft />,
}
