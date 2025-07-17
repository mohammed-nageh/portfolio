const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/mohammed-nageh',
  title: 'Front End',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohmaed Nageh',
  role: 'Front End & Mobile Application Developer ',
  description:
    `Front-End Developer
 A passionate Front-End Developer with expertise in building dynamic and responsive websites using HTML, CSS,
 JavaScript, and React. Experienced in converting designs into fully functional and user-friendly interfaces. Skilled in
 working with tools and libraries such as TypeScript, Sass, Bootstrap, and optimizing user experience and website
 performance.
 Also proficient in Next.js for building server-side rendered and SEO-friendly web applications.
 In addition, experienced in mobile application development using modern frameworks to deliver smooth, high
performance apps across platforms.
 Dedicated to staying up-to-date with the latest technologies and solving technical challenges to deliver high-quality web
 and mobile products.`,
  resume: 'https://drive.google.com/file/d/1mlnjtNWLq9l2xcPL0WJZSgYgU3k2U4m9/view?usp=sharing',
  social: {
    linkedin: 'www.linkedin.com/in/mohamed-nageh-5b95282bb',
    github: 'https://github.com/mohammed-nageh',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'xbeat',
    description:
      'Developed an e-commerce website for selling mobile accessories',
    stack: ['SASS', 'React' ,"React Router","Swiper"],
    sourceCode: 'https://github.com/mohammed-nageh/xbeat',
    livePreview: 'https://xbeat-rosy.vercel.app/',
  },
  {
    name: 'E-commerce-Frech Cart',
    description:
      'Developed an e-commerce website for selling clothing and electronic appliances',
    stack: ['React' , "React Router" , "swiper" , "formik" , "toast"],
    sourceCode: 'https://github.com/mohammed-nageh/frech_cart',
    livePreview: 'https://frech-cart.netlify.app/auth/login',
  },
  {
    name: 'Movies-App',
    description:
      `I created a movie website using React for dynamic functionality, React Router DOM for seamless navigation, Swiper.js for engaging carousels, and Bootstrap for a sleek, responsive design.`,
    stack: ['swiper', 'React Router', 'React'],
    sourceCode: 'https://github.com/mohammed-nageh/movie-App',
    livePreview: 'https://movies-aapps.netlify.app/#here',
  },
  {
    name: 'Landing page',
    description:
      'A clean and professional landing page to introduce myself, highlight my skills, and showcase my projects.',
    stack: ['React', "smooth scroll" , "React Router"],
    sourceCode: ' https://github.com/mohammed-nageh/landing-page',
    livePreview: 'https://landing-pages123wdc.netlify.app/',
  },

  {
    name: ' Mobile Application',
    description:
      'Developed a mobile application for selling electronic products with user-friendly browsing and product management',
    stack: ['React Native', "Expo" , "lottie-react-native" , "react-native-dropdown-picker"],
    sourceCode: 'https://github.com/mohammed-nageh/mobile-app',
  },
 

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React js',
  'Redux-ToolKit',
  'SASS',
  'tailwind css',
  'Git & GitHub',
  'React-Native',
  'Expo',
  'bootstrap',
  'Next js',
  'Rtk Query',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mnageh308@gmail.com',
}

export { header, about, projects, skills, contact }
