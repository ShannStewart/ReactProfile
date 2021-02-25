import { React, Component } from 'react';
import {Link} from 'react-router-dom';


export default class Project extends Component {
    render(){
        return(
        <div>
            <p>{this.props.name}</p>
            <img src={this.props.img} alt={this.props.alt}/>
            <p>Project Tools: {this.props.tools}</p>
            <p>{this.props.details}</p>
             <Link to={this.props.site} target="_blank">Project</Link>
            <Link to={this.props.repo} target="_blank">GitHub</Link>
        </div>
        )
    }
}