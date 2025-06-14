import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export default function FloatingAddButton({ onPress }) {
  return (
    <Pressable 
      style={({ pressed }) => [
        styles.fab,
        pressed && styles.pressed
      ]}
      onPress={onPress}
      android_ripple={{
        color: 'rgba(255, 255, 255, 0.2)',
        borderless: false,
      }}
    >
      {/* Subtle gradient layers */}
      <View style={styles.gradientLayer} />
      
      <Ionicons 
        name="add" 
        size={32} 
        color={Colors.textPrimary}
        style={styles.icon}
      />

   
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: Colors.info,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 16,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    borderWidth: 1.5,
    overflow: 'hidden',
    zIndex: 1000,
  },
  pressed: {
    opacity: 0.4,
  },
  gradientLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 34,
  },
  icon: {
    zIndex: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
 
});