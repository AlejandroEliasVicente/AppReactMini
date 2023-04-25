import React, { useState, useEffect } from 'react';

function ListadoTareas({ listTareas }) {
  
  return (
    <div>
      <h1>Listado de tareas</h1>
      <ul>
        {listTareas.map(todo => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>ID: {todo.id}</p>
            <p>Completada: {todo.isCompleted ? 'Sí' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoTareas;