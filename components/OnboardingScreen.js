import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Updated import
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Home', { selectedLanguage });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nagish</Text>
      <Text style={styles.subTitle}>Choose your preferred language</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
        <Picker.Item label="English" value="English" />
        <Picker.Item label="Hindi" value="Hindi" />
        <Picker.Item label="Marathi" value="Marathi" />
        <Picker.Item label="Tamil" value="Tamil" />
        <Picker.Item label="Telugu" value="Telugu" />
      </Picker>
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
});

export default OnboardingScreen;
