import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CallScreen = ({ route }) => {
  const { phoneNumber, selectedLanguage } = route.params;
  const [transcription, setTranscription] = useState('Waiting for call...');
  const [callStatus, setCallStatus] = useState('Calling...');
  const navigation = useNavigation();

  // Simulate transcription flow
  useEffect(() => {
    setTimeout(() => {
      setTranscription('Transcribing incoming audio...');
    }, 3000);

    setTimeout(() => {
      setCallStatus('Call in progress...');
      setTranscription('Call started. Speak now!');
    }, 6000);

    // Simulate call ending after 20 seconds
    setTimeout(() => {
      setCallStatus('Call Ended');
      setTranscription('Transcription completed');
    }, 20000);
  }, []);

  const handleEndCall = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call to: {phoneNumber}</Text>
      <Text style={styles.status}>{callStatus}</Text>

      <Text style={styles.transcription}>
        {transcription}
      </Text>

      <Button title="End Call" onPress={handleEndCall} />
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
  status: {
    fontSize: 18,
    marginVertical: 20,
  },
  transcription: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 30,
  },
});

export default CallScreen;
