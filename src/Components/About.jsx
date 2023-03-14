import TeamMember from "./TeamMember";
import "./About.css";

const About = ({teamData}) => {
    const teamMembers = teamData.map((member) => (
       <TeamMember key={member.id} member={member} />
      ));
    return (
      <section className="all-team">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis quod laborum quisquam eum earum doloribus dolorem voluptate magnam, odio eos, cum doloremque ducimus iusto aliquam temporibus dicta et fugiat.</p>
        <article>
           <h3>Our Team</h3>
           <div className="teammembers">{teamMembers}</div>
        </article>
      </section>  
      
    );
  };
  
  export default About;