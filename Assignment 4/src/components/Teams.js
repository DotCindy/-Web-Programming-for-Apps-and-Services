import React from 'react';
import MainContainer from './MainContainer';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({
                teams: data
            });
        }).catch(err => {
            console.log("error");
        });
    }

    render() {
        return (
            <MainContainer SideBar="Teams">
                <h1 className="page-header">Teams</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Projects</th>
                                <th>Employees</th>
                                <th>Team Lead</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.map((team, _id) => {
                                return (
                                    <tr>
                                        <td>{team.TeamName}</td>
                                        <td>{team.Projects.map((project, _id) => {
                                            return (
                                                <ul key={project._id}>
                                                    <li>{project.ProjectName}</li>
                                                </ul>
                                            )
                                        })}</td>
                                        <td>{team.Employees.length}</td>
                                        <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </MainContainer>

        );
    }
}

export default Teams;