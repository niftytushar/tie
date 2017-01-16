import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function SuggestionItem({ suggestion, onClick }) {
  const onSuggestionClick = () => onClick(suggestion);
  return (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={onSuggestionClick}
    >
      <Text>
        {suggestion}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  suggestionItem: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 20,
    marginRight: 10,
  },
});

