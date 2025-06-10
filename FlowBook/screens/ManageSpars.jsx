// @ts-nocheck
import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import IconButton from "../components/ui/IconButton";
import Colors from "../constants/Colors";
import CButton from "../components/ui/CButton";
import { SparsContext } from "../store/spars-context";
import SparForm from "../components/ManageSpars/SparForm";
import { deleteSpar, storeSpar, updateSpar } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

export default function ManageSpars({ route, navigation }) {
  const [isSubmitting, setIsSubmmitting] = useState(false);
  const sparCtx = useContext(SparsContext);

  const editedSparId = route.params?.sparId;
  const isEditing = !!editedSparId;

  const selectedSpar = sparCtx.spars.find((spar) => spar.id === editedSparId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Your Spar Log" : "Add Sparring Log"
    });
  }, [navigation, isEditing]);

  async function DeleteSparLogHandler() {
    setIsSubmmitting(true);
    await deleteSpar(editedSparId);
    //no need for the below line
    setIsSubmmitting(false);

    sparCtx.deleteSpar(editedSparId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(sparData) {
    setIsSubmmitting(true);
    if (isEditing) {
      sparCtx.updateSpar(editedSparId, sparData);
      await updateSpar(editedSparId, sparData);
    } else {
      const id = await storeSpar(sparData);
      sparCtx.addSpar({ ...sparData, id: id });
    }

    navigation.goBack();
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <SparForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultFormValues={selectedSpar}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            color={Colors.error}
            onPress={DeleteSparLogHandler}
            size={44}
            icon={"delete-forever"}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "black"
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.error,
    alignItems: "center"
  }
});
