import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Lottie from 'lottie-react';
import animationData from '../../../public/ani/web devoloper.json';
import { about } from "../../portfolio";
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <>

{/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
  
  <div style={{ width: 500, height: 500 }}>
    <Lottie animationData={animationData} loop={true} />
  </div>

  <div className='about center'>
    {name && (
      <h1>
        Hi, I am <span className='about__name'>{name}.</span>
      </h1>
    )}

    {role && <h2 className='about__role'>A {role}.</h2>}
    <p className='about__desc'>{description && description}</p>

    <div className='about__contact center'>
      {resume && (
        <a href={resume} style={{ textDecoration: 'none' }}>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
      )}

      {social && (
        <>
          {social.github && (
            <a
              href={social.github}
              aria-label='github'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {social.linkedin && (
            <a
              href={social.linkedin}
              aria-label='linkedin'
              className='link link--icon'
            >
              <LinkedInIcon />
            </a>
          )}
        </>
      )}
    </div>
  </div>
</div> */}


<div className='about-container'>
  <div className='about-animation'>
    <Lottie animationData={animationData} loop={true} />
  </div>

  <div className='about-text'>
    {name && (
      <h1>
        Hi, I am <span className='about__name'>{name}.</span>
      </h1>
    )}

    {role && <h2 className='about__role'>A {role}.</h2>}
    <p className='about__desc'>{description && description}</p>

    <div className='about__contact center'>
      {resume && (
        <a href={resume} style={{ textDecoration: 'none' }}>
          <span type='button' className='btn btn--outline'>Resume</span>
        </a>
      )}

      {social && (
        <>
          {social.github && (
            <a
              href={social.github}
              aria-label='github'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {social.linkedin && (
            <a
              href={social.linkedin}
              aria-label='linkedin'
              className='link link--icon'
            
            >
              <LinkedInIcon />
            </a>
          )}
        </>
      )}
    </div>
  </div>
</div>


    </>
  )
}

export default About
