import React from "react"
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"

// SVG'
import WrongUsername from "@imgs/auth/WrongUsername.svg"
import WrongPassword from "@imgs/auth/WrongPassword.svg"
import OtorityWarning from "@imgs/auth/OtoryWarning.svg"
import CloseButtonModal from "@imgs/auth/CloseButtonModal.svg"

// Dimensions
let deviceWidth = Dimensions.get("window").width

// Global Styles
import { globalStyles } from "@globalStyles/global"

/**
 *
 * @param {modalVisibility} bool
 * @param {setModalVisibility} func
 * @param {data} object
 */
const AuthModal = ({ modalVisibility, setModalVisibility, data }) => {
  return (
    <Modal visible={modalVisibility} animationType='fade' transparent={true}>
      <View
        style={[styles.authModal, { backgroundColor: "rgba(0, 0, 0, .8)" }]}
      >
        <View style={styles.authModalContent}>
          {/* Header */}
          <View style={styles.authModalHeader}>
            <CloseButtonModal
              onPress={() => setModalVisibility(false)}
              size={24}
              style={globalStyles.closeModalIcon}
            />
          </View>

          {/* Body */}
          <View style={styles.authModalBody}>
            {/* Check type of error  */}
            {data && data.type === "invalidUsername" && (
              <WrongUsername style={globalStyles.mb1} />
            )}
            {data && data.type === "invalidPassword" && (
              <WrongPassword style={globalStyles.mb1} />
            )}
            {data && data.type === "invalidOtority" && (
              <OtorityWarning style={globalStyles.mb1} />
            )}

            <Text style={globalStyles.textSecondary}>
              {data && data.message}
            </Text>
            <Text
              style={[globalStyles.textAlternative, { textAlign: "center" }]}
            >
              {data && data.messageTwo}
            </Text>
          </View>

          {/* Footer */}
          <View style={globalStyles.mt2}>
            <TouchableOpacity
              style={globalStyles.btn}
              onPress={() => setModalVisibility(false)}
            >
              <Text style={globalStyles.btnText}>
                {data && data.type == "invalidOtority"
                  ? "Yakin dan Hapus Data"
                  : "Coba Lagi"}
              </Text>
            </TouchableOpacity>

            {/* For invalidOtority type only */}
            {data && data.type == "invalidOtority" && (
              <TouchableOpacity style={globalStyles.mt1}>
                <Text
                  style={[globalStyles.textPrimary, { textAlign: "center" }]}
                >
                  Saya Tidak Mau Menghapus Data
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  authModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  authModalContent: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 20,
    width: deviceWidth,
  },
  authModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authModalBody: {
    justifyContent: "center",
    alignItems: "center",
  },
})

export default AuthModal
