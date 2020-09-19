import React, { Component } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import SchoolDataService from "../service/SchoolDataService";

class StudentComponent2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        SchoolDataService.retrieveStudent(this.state.id)
            .then(response =>
                this.setState({
                    id: response.data.id,
                    name: response.data.name
                })
            )
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Name'
        } else if (values.name.length < 5) {
            errors.name = 'Min. 5 characters in the name'
        }

        return errors

    }

    onSubmit(values) {
        console.log(this.state.id)
        let student = values.id > 0 ?
            {
                id: this.state.id,
                name: values.name
            } :
            {
                name: values.name,
            }
        if (values.id > 0) {
            SchoolDataService.updateStudent(this.state.id, student)
                .then(() => this.props.history.push('/students'))
        }
        else {
            SchoolDataService.createStudent(student)
                .then(() => this.props.history.push('/students'))
        }
        console.log(student);
    }

    render() {
        let { id, name } = this.state
        return(
            <>
                <h1>Student Details</h1>
                <div>
                    <h3>Student</h3>
                    <div className="container">
                        <Formik
                            initialValues={{ id, name }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                        >
                            {
                                (props) => (
                                    <Form>
                                        <ErrorMessage name="name" component="div"
                                                      className="alert alert-warning" />
                                        <fieldset className="form-group">
                                            <label>Id</label>
                                            <Field className="form-control" type="text" name="id" disabled/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Name</label>
                                            <Field className="form-control" type="text" name="name"/>
                                        </fieldset>
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </>
        )
    }
}

export default StudentComponent2