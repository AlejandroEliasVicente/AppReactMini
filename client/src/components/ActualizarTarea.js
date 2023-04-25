import React, { useState } from 'react';

function ActualizarTarea({ tareas, setTareas }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/tarea/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        isCompleted: isCompleted
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('ID no encontrado');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const index = tareas.findIndex(t => t.id === parseInt(id));
      const newTareas = [...tareas];
      newTareas[index] = data.data;
      setTareas(newTareas);
      setError(false);
    })
    .catch(error => {
      console.error(error);
      setError(true);
    });

    setId('');
    setTitle('');
    setIsCompleted(false);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Actualizar una tarea</h1>
      <label>
        ID de tarea:
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Título:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Completado:
        <input type="checkbox" checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Actualizar tarea</button>
      {error && <p style={{ color: 'red' }}>La tarea no existe.</p>}
    </form>
  );
}

export default ActualizarTarea;
