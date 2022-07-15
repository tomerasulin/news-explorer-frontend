import img from '../../images/tomer1.jpg';
import './About.css';

const About = () => {
  return (
    <section className='about'>
      <img className='about__img' src={img} alt='A pic of myself' />
      <div className='about__author'>
        <h2 className='about__title'>Tomer Asulin</h2>
        <p className='about__paragraph'>
          Hey all, My name is Tomer and I'm a full-stack web developer. I'm familiar with
          HTML, CSS, JS, React and Node.js
        </p>
        <p className='about__paragraph'>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
};

export default About;
