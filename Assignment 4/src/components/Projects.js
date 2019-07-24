import React from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

class Projects extends React.Component {
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
            <MainContainer SideBar="Projects">
                <h1 className="page-header">Projects</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projects.map((project, _id) => {
                                return (
                                    <tr key={project._id}>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                        <td>{moment(project.ProjectEndDate).format('LL')}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </MainContainer>
        )
    }
}

export default Projects;