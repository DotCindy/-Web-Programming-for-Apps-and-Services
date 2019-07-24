import React from 'react';
import MainContainer from './MainContainer.js';
import ProjectsPanel from './ProjectsPanel.js';
import TeamsPanel from './TeamsPanel.js';
import EmployeesPanel from './EmployeesPanel';

class Overview extends React.Component {
    render() {
        let url = "https://sleepy-inlet-67076.herokuapp.com/";
        return (
            <MainContainer SideBar="Overview">
                <h1 className="page-header">Overview</h1>
                <div className="row">
                    <div className="col-md-4">
                        <ProjectsPanel dataSource={url + "projects"} />
                    </div>
                    <div className="col-md-4">
                        <TeamsPanel dataSource={url + "teams"} />
                    </div>
                    <div className="col-md-4">
                        <EmployeesPanel dataSource={url + "employees"} />
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default Overview;