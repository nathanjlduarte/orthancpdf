import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header do app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',  // Keep it fixed at the top
    top: 0,               // Stick it to the top of the screen
    left: 0,              // Align with the left edge
    right: 0,             // Align with the right edge
    padding: 20,          // Add some padding for better appearance
    backgroundColor: '#6200EE',  // Set your background color
    zIndex: 1000,         // Ensure it stays on top of other content
  },
  headerText: {
    color: 'white',       // Text color
    fontSize: 20,         // Text size
    fontWeight: 'bold',   // Make it bold
    textAlign: 'center',  // Center align the text
  },
});

export default Header;