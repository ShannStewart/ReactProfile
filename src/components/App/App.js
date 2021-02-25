
import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectBank from '../ProjectBank';
import Project from '../Project/Project';

class App extends Component {

  render(){
    return (
    <div className='App'>

      <section className='sidenav'>
      <img src="./0.jpg" alt="Zackry Broodie-Stewart"/>
        <p className='name'>Zackry Broodie-Stewart</p>
        <p className='bio'>I am a Web Developer taking the Front End Development bootcamp at Thinkful. I recieved a passion for computers from my family of programmers. I hope to work with like minded individuals.  I'm from the New York Area.  When I'm not working I am reading comics or playing games.</p>
          <div className='contactInfo'>
            <Link to="https://www.linkedin.com/in/zackrybroodiestewart" target="_blank">Linkedin</Link>
            <Link to="https://github.com/ShannStewart" target="_blank">GitHub</Link>
            <Link to="mailto:Zackry.Broodie.Stewart@gmail.com" target="_blank">Zackry.Broodie.Stewart@gmail.com</Link>
          </div>
      </section>

      <section className='topnav'>
      <p class='name'>Zackry Broodie-Stewart</p>
          <div class='contactInfo'> 
            <Link to="https://www.linkedin.com/in/zackrybroodiestewart" target="_blank">Linkedin</Link>
          <Link to="https://github.com/ShannStewart" target="_blank">GitHub</Link>
          <Link to="mailto:Zackry.Broodie.Stewart@gmail.com" target="_blank">Zackry.Broodie.Stewart@gmail.com</Link>
          </div>
      </section>     

      <section className='projects'>

      <div className='tiny'>
        <p className='tiny'>I am a Web Developer taking the Front End Development bootcamp at Thinkful. I recieved a passion for computers from my family of programmers. I hope to work with like minded individuals.  I'm from the New York Area.  When I'm not working I am reading comics or playing games.</p>
      </div>

      {ProjectBank.map((project, index) => 
      <Project key={index} 
      name={project.name} 
      img={project.img} 
      alt={project.alt}
      tools={project.project_tools}
      details={project.details}
      site={project.site}
      repo={project.repo}
      />)}

       </section>
    </div>
    )
  }
}

export default App;
