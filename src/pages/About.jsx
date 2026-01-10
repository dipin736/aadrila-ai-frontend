import AboutSection from '../components/about/aboutsection';
import Teamsection from '../components/about/teamsection';
import Contact from './Contact';

const About = () => {
    return (
        <section id="about" className="relative min-h-screen pt-22 overflow-hidden">
           <AboutSection/>
           <Teamsection/>
            <Contact />
        </section>
    );
};

export default About;
