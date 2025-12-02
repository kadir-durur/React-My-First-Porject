import { useState } from 'react'
import './App.css'
import muscles from './data/data'

function App() {
 
  const [selectedMuscle , setSelectedMuscle] = useState('all');

  const filteredMuscle = selectedMuscle === "all" ? muscles : muscles.filter((m)=> m.name === selectedMuscle);
  return (
   <div className="app">
    <div className="button-group" role="tablist" aria-label="Muscle filters">
        <button
          className={selectedMuscle === "all" ? "active" : ""}
          aria-pressed={selectedMuscle === "all"}
          onClick={() => setSelectedMuscle("all")}
        >
          All
        </button>
        {muscles.map((muscle) => (
          <button
            key={muscle.name}
            className={selectedMuscle === muscle.name ? "active" : ""}
            aria-pressed={selectedMuscle === muscle.name}
            onClick={() => setSelectedMuscle(muscle.name)}
          >
            {muscle.displayName}
          </button>
        ))}
      </div>
     <div>
      {filteredMuscle.map((muscle) => (
        <div key={muscle.name} className="muscle-group">
          <h1>{muscle.displayName}</h1>

          <div className="exercise-list">
            {muscle.exercises.map((exercise) => (
              <div key={exercise.id} className="exercise-card">
                <h3>{exercise.excName}</h3>
                <p><strong>Equipment:</strong> {exercise.equipment}</p>
                <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
                <img
                  src={exercise.image}
                  alt={exercise.excName}
                  className="exercise-img"
                />
                <p className="instructions">{exercise.instructions}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
 
   </div>
  )
}

export default App
