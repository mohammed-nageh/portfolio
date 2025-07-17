import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mnageh308@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  style={{textDecoration:"none"}}
>
  <span type="button" className="btn btn--outline">Email me</span>
</a>
    </section>
  )
}

export default Contact
{/* <a href="mailto:mnageh308@gmail.com" style={{textDecoration:"none"}}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}