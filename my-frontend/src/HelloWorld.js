
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Paper, Box, CircularProgress } from '@mui/material';

function HelloWorld() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://js-api-production.up.railway.app/');
      setMessage(response.data);
    } catch (error) {
      setMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8, mb: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Hello World App
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={fetchMessage}
            sx={{ mb: 2 }}
          >
            Fetch Message
          </Button>
        </Box>
        {loading ? (
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          <Typography variant="h6" align="center">
            Message: {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
}

export default HelloWorld;
