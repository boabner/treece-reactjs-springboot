import React from "react";
import ListStudentsComponent from "./ListStudentsComponent";
import StudentComponent from "./StudentComponent2";

import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';


export default (props) => {
    return (
        <>
            <h3>Treece School</h3>
            <Router>
                <>
                    <h1>List of Students</h1>
                    <Switch>
                        <Route path="/" exact component={ListStudentsComponent} />
                        <Route path="/students" exact component={ListStudentsComponent} />
                        <Route path="/students/create" exact component={StudentComponent} />
                        <Route path="/students/:id" exact component={StudentComponent} />
                    </Switch>
                </>
            </Router>
        </>
    )
}