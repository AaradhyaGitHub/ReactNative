import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function FlexBoxDocScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.articleContainer}>
        <Text style={styles.heading}>Flexbox in React Native</Text>
        <Text style={styles.paragraph}>
          Flexbox is a powerful layout system that allows you to build
          responsive and flexible UIs. In React Native, Flexbox is the primary
          way to layout components.
        </Text>

        <Text style={styles.subheading}>Main Concepts:</Text>

        <Text style={styles.bullet}>
          • <Text style={styles.bold}>flexDirection:</Text> Determines the
          direction of the layout. Use 'row' for horizontal and 'column' for
          vertical (default).
        </Text>

        <Text style={styles.bullet}>
          • <Text style={styles.bold}>justifyContent:</Text> Aligns children
          along the main axis. Options include 'flex-start', 'center',
          'space-between', etc.
        </Text>

        <Text style={styles.bullet}>
          • <Text style={styles.bold}>alignItems:</Text> Aligns children along
          the cross axis. Common values are 'stretch', 'center', and
          'flex-start'.
        </Text>

        <Text style={styles.subheading}>Example:</Text>
        <Text style={styles.code}>
          {`const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});`}
        </Text>

        <Text style={styles.paragraph}>
          This will center the children both horizontally and vertically in a
          row layout. Flexbox makes it easier to build adaptive and modern
          interfaces without calculating positions manually.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20
  },
  articleContainer: {
    flex: 1
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#4a99fb"
  },
  subheading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12
  },
  bullet: {
    fontSize: 16,
    marginBottom: 8
  },
  bold: {
    fontWeight: "bold"
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 6,
    fontSize: 14,
    marginVertical: 10
  }
});
