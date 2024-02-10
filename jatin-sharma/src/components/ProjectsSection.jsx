import React from 'react';
import '../assets/styles/projects.css'; // Import your CSS file for styling
import amazonClone from '../assets/images/Amazon-Clone.png';
import carGame from '../assets/images/car-game.png';
import igoko from '../assets/images/Igoko-website.png';
import inventoryManagement from '../assets/images/Inventory-management.png';
import suchna from '../assets/images/Suchna.jpg';
import whatsappClone from '../assets/images/whatsapp-clone.jfif';
import githubIcon from '../assets/images/github-icon.png';

const projects = [
  {
    id: 1,
    name: 'Inventory Management',
    image: inventoryManagement,
    description: 'A comprehensive inventory management system developed using the MERN stack. Leveraging React, Express, and MongoDB, this platform offers seamless inventory tracking and management functionalities.',
    technologies: ['#React', '#Node.js', '#MongoDB'],
    githubLink: 'https://github.com/MrtitaniumJ/Inventory-management',
  },
  {
    id: 2,
    name: 'Startup Website',
    image: igoko,
    description: "Crafted a dynamic website for a startup venture during a summer internship as a full-stack developer. Built with HTML, CSS, JavaScript, and Django, this website showcases the startup's offerings and services, providing an engaging user experience.",
    technologies: ['#HTML', '#JavaScript', '#Django'],
    githubLink: 'https://github.com/MrtitaniumJ/startup2-1.0.0',
  },
  {
    id: 3,
    name: 'Amazon Clone',
    image: amazonClone,
    description: 'Designed and implemented a replica of the Amazon platform to hone frontend skills. Utilizing HTML and CSS, this clone closely resembles the UI of the original platform, offering users a familiar browsing experience.',
    technologies: ['#HTML', '#CSS'],
    githubLink: 'https://github.com/MrtitaniumJ/Amazon-Clone',
  },
  {
    id: 4,
    name: 'Car Game',
    image: carGame,
    description: "Developed an interactive car game using HTML, CSS, and JavaScript, with a focus on JavaScript's DOM manipulation concepts. Players navigate through various challenges and levels, showcasing engaging gameplay dynamics.",
    technologies: ['#HTML', '#CSS', '#JavaScript'],
    githubLink: 'https://github.com/MrtitaniumJ/car-game-html-css-js',
  },
  {
    id: 5,
    name: 'Suchna:News App',
    image: suchna,
    description: 'Created a news aggregation app named Suchna using the News API. Developed with Java and XML, this app delivers curated news content to users, providing a convenient and streamlined news browsing experience.',
    technologies: ['#Java', '#XML'],
    githubLink: 'https://github.com/MrtitaniumJ/Suchna',
  },
  {
    id: 6,
    name: 'WhatsApp Clone',
    image: whatsappClone,
    description: 'Engineered a WhatsApp clone using Java, XML, Firebase, and Android Studio. This clone closely mimics the functionality and UI of the original WhatsApp application, offering users a familiar messaging platform with real-time communication capabilities.',
    technologies: ['#Java', '#XML', '#Firebase'],
    githubLink: 'https://github.com/MrtitaniumJ/WhasApp-Clone',
  },
];

const ProjectsSection = () => {
  const redirectToGitHub = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  return (
    <div id='projects' className="projects-section">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className="section-heading">My Work</h2>
            <p className="section-subheading">Projects.</p>
            <p className="section-description">
              Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
            </p>

            <div className='projects-container'>
              <div className="project-cards">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="card-aura"></div>
                    <div className="image-container">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                      />
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub"
                          className="github-icon-img"
                        />
                      </a>
                    </div>
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className={`tag tag-${index}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                ))}
                <button
                  onClick={() => redirectToGitHub('https://github.com/MrtitaniumJ?tab=repositories')}
                  className='show-more-button'>
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
