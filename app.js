const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint principal que devuelve la hora
app.get('/api/time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.json({
    timestamp: currentTime,
    message: 'Hora actual del servidor',
    formatted: new Date().toLocaleString('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires'
    })
  });
});

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Servidor funcionando correctamente' 
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
  console.log(`📍 API disponible en: http://localhost:${port}/api/time`);
});