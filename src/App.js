import React, { useState } from 'react';
import Form from './Form';
import './App.css';



function App() {
  
  const[team, setTeam] = useState([]);

  return (
    <div className="App">
      <header className="App-header">

        <Form team={team} setTeam={setTeam}/>
       {team.map(teamMember => {
         return(
           <div>
            <h3>NAME: {teamMember.name}</h3>
            <p>EMAIL: {teamMember.email}</p>
            <p>ROLE: {teamMember.role}</p>
           </div>
         )
       })}
      </header>
    </div>
  );
}

export default App;
