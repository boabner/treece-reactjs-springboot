import React, { Component }from "react";
import SchoolDataService from "../service/SchoolDataService";

class ListCoursesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message: null
        }
        this.deleteStudentClicked = this.deleteStudentClicked.bind(this)
        this.updateStudentClicked = this.updateStudentClicked.bind(this)
        this.addStudentClicked = this.addStudentClicked.bind(this)
        this.refreshStudents = this.refreshStudents.bind(this)
    }

    componentDidMount() {
        this.refreshStudents();
    }

    refreshStudents() {
        SchoolDataService.retrieveAllStudents()
            .then(
                response => {
                    this.setState({students: response.data})
                }
            )
    }

    addStudentClicked() {
        this.props.history.push(`/students/create`)
    }

    updateStudentClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/students/${id}`)
    }

    deleteStudentClicked(id) {
        SchoolDataService.deleteStudent(id)
            .then(
                response => {
                    this.setState({ message: `Delete of student ${id} Successful` })
                    this.refreshStudents()
                }
            )
    }

    render() {
        return (
            <>
                <div className="container">
                    <h3>List Students</h3>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        student =>
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>
                                                    <button className="btn btn-success" onClick={() => this.updateStudentClicked(student.id)}>Update</button>
                                                    <button className="btn btn-warning" onClick={() => this.deleteStudentClicked(student.id)}>Delete</button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="row">
                            <button className="btn btn-success" onClick={this.addStudentClicked}>Add</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ListCoursesComponent
