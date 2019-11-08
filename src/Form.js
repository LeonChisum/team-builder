import React, { useState } from 'react';



function Form(props) {
    
    const[teamMember, setTeamMember] = useState({name: "",
                                             email: "",
                                             role: ""})


    const handleChange = (e) => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.setTeam([...props.team, teamMember]);

        setTeamMember(teamMember)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type = "text" name="name" value={teamMember.name} onChange={e => handleChange(e)}/>
            </label>
            <label>
                Email:
                <input type = "text" name="email" onChange={e => handleChange(e)}/>
            </label>
            <label>
                Role:
                <input type = "text" name="role" onChange={e => handleChange(e)}/>
            </label>
            <button>Submit</button>
        </form>
    )

}


export default Form;