import React, { useState } from 'react';

function BorrarTareaID({ setTareas }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/tarea/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setTareas(data.data);
    })
    .catch(error => console.error(error));

    setId('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Eliminar una tarea</h1>
      <input type="text" placeholder="ID de tarea" value={id} onChange={e => setId(e.target.value)} />
      <button type="submit">Eliminar tarea</button>
    </form>
  );
}

export default BorrarTareaID;