import React from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
        .then(res => res.json())
        .then(data => {
            this.setState({
                employees: data
            });
        }).catch(err => {
            console.log("error");
        });
    }

    render() {
        return (
            <MainContainer SideBar="Employees">
                <h1 className="page-header">Employees</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name &amp; Position</th>
                                <th>Address</th>
                                <th>Phone Num</th>
                                <th>Hire Date</th>
                                <th>Salary Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((emp, index) => {
                                return (
                                    <tr key={emp._id}>
                                        <td>{emp.FirstName} {emp.LastName} - {emp.Position.PositionName}</td>
                                        <td>{emp.AddressStreet} {emp.AddressState} {emp.City} {emp.AddressZip}</td>
                                        <td>{emp.PhoneNum}</td>
                                        <td>{moment(emp.HireDate).format('LL')}</td>
                                        <td>$ {emp.SalaryBonus}</td>
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

export default Employees;
