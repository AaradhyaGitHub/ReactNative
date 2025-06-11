// @ts-nocheck
//------------------ Default Imports -------------------------//
import React from "react";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Button from "../../../UserAuth/components/ui/Button";

export default function PlaceItem({ place, onSelect }) {
  return (
    <View>
      <View>
        {/* Instagram style Profile Name and address below it*/}
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>

      {/* Date on the Far Right side*/}
      <View>{place.dateCreated}</View>

      {/* Instagram style Main Image Container */}
      <View>
        <Image source={{ uri: place.imageUri }} />
        <Text>{place.caption}</Text>
      </View>

      <Pressable onPress={onSelect}>
        <Button title="Explore" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    
})