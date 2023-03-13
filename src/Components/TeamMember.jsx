import { Link } from "react-router-dom";
import christian from "../data/christian.jpg";
import carlos from "../data/carlos.png";
import keeanu from "../data/keeanu.png";

const TeamMember = ({ member }) => {
    let ourimg;
    let name = `${member.firstName} ${member.lastName}`;
    switch (member.id) {
        case "CP-1":  ourimg = carlos; break;
        case "ID-2":   ourimg = carlos; break;
        case "KR-3":  ourimg = keeanu; break;
        case "CO-4":  ourimg = christian; break;
        default: break;
    }
    
    
  
  
    return (
      <article className="teammember">
        <Link to={`/about/${member.id}`}><img src={ourimg} alt="member" /></Link>
        <h3>{name}</h3>
       
      </article>
    );
  };
  
  export default TeamMember;