import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        return (            
            <BrowserRouter>
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Overview" ? 'active' : '')}><Link to="/">Overview</Link></li>
                    <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to="/projects">Projects</Link></li>
                    <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to="/teams">Teams</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/employees">Employees</Link></li>
                </ul>
            </div>
            </BrowserRouter>
        );
    }
}

export default SideBar;