import { Link } from "react-router-dom";
 import {useParams } from "react-router-dom";
 import { useState } from "react";
 import "./Member.css"

import christian from "../data/christian.jpg";
import carlos from "../data/carlos.png";
import keeanu from "../data/keeanu.png";
import isaiah from "../data/isaiah.jpeg";
 
 const  Member = ({teamData}) => {
 
    const { id } = useParams();
    const [member] = useState(teamData.find((memb) => memb.id === id))


    let ourimg;
    
    switch (id) {
        case "CP-1":  ourimg = carlos; break;
        case "ID-2":   ourimg = isaiah; break;
        case "KR-3":  ourimg = keeanu; break;
        case "CO-4":  ourimg = christian; break;
        default: break;
    }
    
    return (
     <div>
        
      <div className="centrado">

      <h4>{member.pursuit}</h4>
          <div className="memberInfo">
             <img src={ourimg} alt="Profile "></img>
             <div  className="memberData">
                <h2>{member.firstName}  {member.lastName}</h2>
                <h4>{member.place}</h4>
                <h4>Birthday  {member.dob}</h4>
               
             </div>
          </div>
          <div className="memberInfo2">
             <h5>{member.email}</h5>
             <Link to={member.linkedin}><button className="linkedin"></button></Link>
             <Link to={member.website}><button className="github"></button></Link>
             {/* <Link to={member.linkedin}><h5>{member.linkedin}</h5></Link>
             <Link to={member.website}><h5>{member.website}</h5></Link> */}

          </div>
          <div className="memberInfo3">
             <h5>{member.descr}</h5>
        

          </div>


       </div>
       <Link to={"/about"} className="linktoteam"><h5>Back to Team</h5></Link>
     </div>
    )
}

export default Member;