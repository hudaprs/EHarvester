import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Global Styles
import { globalStyles } from "@globalStyles/global";

// Redux
import { connect } from "react-redux";
import { signOut } from "@reduxActions/authActions";

const Config = ({ signOut }) => {
  return (
    <View style={globalStyles.container}>
      <Text>Config Screen</Text>
      <TouchableOpacity
        style={[globalStyles.btn, globalStyles.mt2]}
        onPress={signOut}
      >
        <Text style={globalStyles.btnText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { signOut })(Config);
