import { Link } from "react-router-dom";
import christian from "../data/christian.jpg";
import carlos from "../data/carlos.png";
import keeanu from "../data/keeanu.png";
import isaiah from "../data/isaiah.jpeg";

const TeamMember = ({ member }) => {
    let ourimg;
    let name = `${member.firstName} ${member.lastName}`;
    switch (member.id) {
        case "CP-1":  ourimg = carlos; break;
        case "ID-2":   ourimg = isaiah; break;
        case "KR-3":  ourimg = keeanu; break;
        case "CO-4":  ourimg = christian; break;
        default: break;
    }
    
    
  
  
    return (
      <Link to={`/about/${member.id}`}>
      <article className="teammember">
       <img src={ourimg} alt="member" />
        <h3>{name}</h3>
      </article>
      </Link>
    );
  };
  
  export default TeamMember;