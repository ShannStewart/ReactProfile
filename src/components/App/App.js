
import './App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectBank from '../ProjectBank';
import Project from '../Project/Project';
import Zack from './Zack.jpg'

class App extends Component {
  state = {
    ip: {},
  }

  componentDidMount(){
    const https = require('https')
    https.get("https://ipgeolocation.abstractapi.com/v1?api_key=fb1da43d124246febbac595878d333bb", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
       // console.log(JSON.parse(data));
        this.setState({ ip : JSON.parse(data) });
    });

    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });

  }

  render(){
    return (
    <div className='App'>

      <section className='sidenav'>
      <img src={Zack} alt="Zackry Broodie-Stewart"/>
        <p className='name'>Zackry Broodie-Stewart</p>
        <p className='bio'>A Web Developer. I recieved a passion for computers from my family of programmers. I hope to work with like minded individuals.  I'm from the New York Area.  When I'm not working I am reading comics or playing games.</p>
          <div className='contactInfo'>
            <a href="https://www.linkedin.com/in/zackrybroodiestewart" target="_blank">Linkedin</a>
            <a href="https://github.com/ShannStewart" target="_blank">GitHub</a>
            <a href="mailto:Zackry.Broodie.Stewart@gmail.com" target="_blank">Email</a>
          </div>
      </section>

      <section className='topnav'>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH0Yw8h2bq_9Q/profile-displayphoto-shrink_400_400/0/1609006725332?e=1620864000&v=beta&t=wWIVsZruOMpMgV_el5ic6m8_izEyol5L8-OkNYbaCc4" alt="Zackry Broodie-Stewart"/>
      <h3 className='name'>Zackry Broodie-Stewart</h3>
          <div className='contactInfo'> 
            <a href="https://www.linkedin.com/in/zackrybroodiestewart" target="_blank">Linkedin</a>
          <a href="https://github.com/ShannStewart" target="_blank">GitHub</a>
          <a href="mailto:Zackry.Broodie.Stewart@gmail.com" target="_blank">Email</a>
          </div>
      </section>

       <div className='tiny'>
        <p className='tiny'>A Web Developer. I recieved a passion for computers from my family of programmers. I hope to work with like minded individuals.  I'm from the New York Area.  When I'm not working I am reading comics or playing games.</p>
      </div>     

      <section className='projects'>     

      {ProjectBank.map((project, index) => 
      <Project key={index} 
      name={project.name} 
      img={project.img} 
      alt={project.alt}
      tools={project.project_tools}
      details={project.details}
      links={project.links}
      ip={this.state.ip}
      />)}

       </section>
    </div>
    )
  }
}

export default App;
