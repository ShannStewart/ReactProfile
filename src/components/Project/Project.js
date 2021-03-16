import { React, Component } from 'react';
//import {Link} from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Project.css'

export default class Project extends Component {

    state = {
        click: 0
    }

    emailAlert = (a, b) => {

        var ip = b;

        var message = { to_name: 'Shann', app: a, location: ip.city, state: ip.region};

        if(ip.security.is_vpn){
            var security = 'This was sent using a vpn';
        }
        else{
            var security ='This was not sent using a vpn';
        }

        message.vpn = security;
        

    if (this.state.click <= 0){
        
        emailjs.send('profile_alarm', 'template_0qmd7to', message, 'user_vozk5NYICxbUDkXQc6TDp')
        .then((result) => {
           // console.log(result.text + ' app name: ' + JSON.stringify(message.app) ); 
        }, (error) => {
          //  console.log(error.text);
        });

        var clicker = this.state.click
        clicker = clicker + 1;
        this.setState({ click: clicker });
        }

    }

    render(){

        return(
        <div className='project'>
            <h4>{this.props.name}</h4>
            <img className='projectImage' src={this.props.img} alt={this.props.alt}/>
            <p>Project Tools: {this.props.tools}</p>
            <p>{this.props.details}</p>
            <div className='projectLinks'>
                {this.props.links.map((link, index) => <a key={index} href={link.link} onClick={() => this.emailAlert(this.props.name, this.props.ip)} target="_blank">{link.name}</a>)}
            </div>
        </div>
        )
    }
}