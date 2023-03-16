import TeamMember from "./TeamMember";
import "./About.css";

const About = ({teamData}) => {
    const teamMembers = teamData.map((member) => (
       <TeamMember key={member.id} member={member} />
      ));
    return (
      <section className="all-team">
        <p className="projectSum">We're a fully distributed team of 4 people working while studying at Pursuit. We’re working to build the best products to help with your search, build our brands and grow our businesses.
         We aimed to do things a little differently to build one of the most unique workplaces by rethinking a lot of traditional practices.</p>
        <article>
           <h3 className="ourTeam">Our Team</h3>
           <div className="teammembers">{teamMembers}</div>
        </article>
      </section> 
    );  
  };
  
  export default About;

