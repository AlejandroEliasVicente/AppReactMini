import React, { useState } from 'react';

async function sendTarea( tarea ) {

  const response = await fetch('/ntarea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( tarea )
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

function CrearTarea({ setTareas }) {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    sendTarea({title : titulo}).then((data) => {
      console.log(data)
      setTareas(data.data);
    });
  }
  
  return (
    <form>
      <h1>Crear una tarea</h1>
      <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <button onClick= {handleSubmit} type="submit">Crear tarea</button>
    </form>
  );
}

export default CrearTarea;