import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

export const TextToSpeech = () => {

  const speechText = ['Manan', 'Vijay', 'Anuj', 'Aman', 'Sunil', 'Ravinder', 'Lokesh', 'Prince', 'Ritesh', 'Gaurav', 'Ganesha']

  const handleSpeak = (item) => {
    const utterance = new SpeechSynthesisUtterance(`Hello ${item}`);

    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[1];

    speechSynthesis.speak(utterance);
  }

  return (
    <>
    <Box
        sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px'
        }} 
    >
      {speechText.map((item, index) => (
        <Card
          key={`${item}_${index}`}
          onClick={() => handleSpeak(item)}
          sx={{
            padding: '80px 40px',
            margin: '0 20px',
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            cursor: 'pointer'
          }}
        >
          {item}
      </Card>
      ))}
    </Box>
    </>
  )
}
