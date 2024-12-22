import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const { selectedLanguage } = route.params;  // Get the selected language from onboarding
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleStartCall = () => {
    if (phoneNumber) {
      navigation.navigate('CallScreen', { phoneNumber, selectedLanguage });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nagish</Text>
      <Text style={styles.subtitle}>Language: {selectedLanguage}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <Button title="Start Call" onPress={handleStartCall} />
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
