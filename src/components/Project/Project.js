import { React, Component } from 'react';
import {Link} from 'react-router-dom';
import './Project.css'


export default class Project extends Component {
    render(){
        return(
        <div className='project'>
            <h4>{this.props.name}</h4>
            <img className='projectImage' src={this.props.img} alt={this.props.alt}/>
            <p>Project Tools: {this.props.tools}</p>
            <p>{this.props.details}</p>
            <div className='projectLinks'>
                {this.props.links.map((link, index) => <a href={link.link} target="_blank">{link.name}</a>)}
            </div>
        </div>
        )
    }
}