import img from '../../images/tomer1.jpg';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <img className='about__img' src={img} alt='A pic of myself' />
      <div className='about__author'>
        <h2 className='about__title'>Tomer Asulin</h2>
        <p className='about__paragraph'>
          Hey all, My name is Tomer and I'm a full-stack web developer.
          Knowledge of HTML, CSS, JS, React and Node.js. Creation of remote
          server, interactation with databases such as MongoDB and MySQL.
        </p>
        <p className='about__paragraph'>
          Alumni of Web development course in Practicum by Yandex. The course
          provided me techniques and tools that improved my coding skills and
          understanding.
        </p>
      </div>
    </section>
  );
};

export default About;
