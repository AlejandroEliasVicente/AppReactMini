import React, {useEffect, useState} from 'react';
import ListadoTareas from './components/ListsTareas';
import './App.css';
import CrearTarea from './components/CrearTarea';
import BorrarTareaID from './components/BorrarTareaID';
import ActualizarTarea from './components/ActualizarTarea';




function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    console.log("Prueba")
    fetch('/tarea')
      .then(res => res.json())
      .then(data => setTareas(data.data))
      .catch(err => console.log(err));
  }, []);

  function updateTarea(tareas){
    setTareas(tareas)
  }

  return (
    <div className="App">
      <CrearTarea setTareas={updateTarea}/>
      <BorrarTareaID setTareas={updateTarea}/>
      <ActualizarTarea tareas={tareas} setTareas={updateTarea}/>
      <ListadoTareas listTareas={tareas}/>
    </div>
  );
}



export default App