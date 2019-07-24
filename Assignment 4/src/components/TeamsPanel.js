import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

class TeamsPanel extends React.Component {
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
            <BrowserRouter>
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Teams</h3>
            </div>
            <div className="panel-body">
              <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                  <tbody>
                    {this.state.teams.map((team, _id) => {
                        return (
                            <tr key={team._id}>
                                <td>{team.TeamName}</td>
                                <td>{team.Employees.length} members</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
              <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
            </div>
          </div>
          </BrowserRouter>
        );
    }
}

export default TeamsPanel;