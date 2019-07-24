import React from 'react';
import moment from 'moment';
import {BrowserRouter, Link } from 'react-router-dom';

class ProjectsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({
                projects: data
            });
        }).catch(err => {
            console.log("error");
        });
    }

    render() {
        return (
            <BrowserRouter>
            <div className="panel panel-default">
                <div className="panel-heading">
                   <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, _id) => {
                                    let activeDays = moment().diff(moment(project.ProjectStartDate), 'days');
                                    return (
                                        <tr key={project._id}>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {activeDays} days</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

export default ProjectsPanel;