 
 import {  Link, useParams } from "react-router-dom";
 import { useState } from "react";
 
 const  Member = ({teamData}) => {
 
    const { id } = useParams();
    const [member] = useState(teamData.find((memb) => memb.id === id))

    
    return (
        <div>
            <Link to={"/about"}><h4>back to Team</h4></Link>
            <h3>peresonal info of each member here </h3>
            <h4>{id} {member.firstName} </h4>
        </div>
    )
}

export default Member;