import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import Lottie from 'lottie-react';
import animationSkills from '../../../public/ani/developer skills.json';
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
  <>

    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
  <div style={{ width: 400, height: 400 }}>
    <Lottie animationData={animationSkills} loop={true} />
  </div>

  <section className='section skills' id='skills'>
    <h2 className='section__title'>Skills</h2>
    <ul className='skills__list'>
      {skills.map((skill) => (
        <li key={uniqid()} className='skills__list-item btn btn--plain'>
          {skill}
        </li>
      ))}
    </ul>
  </section>
</div> */}



<div className="responsive-section">
  <div className="lottie-box">
    <Lottie animationData={animationSkills} loop={true} />
  </div>

  <section className="text-box section skills" id="skills">
    <h2 className="section__title">Skills</h2>
    <ul className="skills__list">
      {skills.map((skill) => (
        <li key={uniqid()} className="skills__list-item btn btn--plain">
          {skill}
        </li>
      ))}
    </ul>
  </section>
</div>


</>

  )
}

export default Skills
