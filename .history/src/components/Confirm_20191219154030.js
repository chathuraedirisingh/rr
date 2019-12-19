import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box, List, ListItem, ListItemText } from "@material-ui/core";
import firebase from '../configs/firebase';

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // console.log()
        //fire up
        // this.props.nextStep();
        this.get_connection(this.props)
    };
    componentDidMount() {
        // this.get_connection();
    }

    get_connection(data) {
        // const {data} =this.state;
        console.log(data);

        var first_name = data.first_name;
        var middle_name = data.middle_name;
        var last_name = data.last_name;
        var date_of_birth = data.date_of_birth;
        var ssn = data.ssn;
        var email = data.email;
        var phone = data.phone;
        var address = data.address;
        var city = data.city;
        var state = data.state;
        var zip = data.zip;
        var employed = data.employed;
        var employer_name = data.employer_name;
        var job_title = data.job_title;
        var emp_phone = data.emp_phone;
        var income = data.income;
        var start_date = data.start_date;
        var income_ext = data.income_ext;

        // firebase
        //     .database()
        //     .ref('dealer_web/')
        //     .orderByChild('ssn')
        //     .equalTo(ssn)
        //     .once('value')
        //     .then(snapshot => {
        //         if (snapshot.val()) {
        //             console.log('data exist');
        //             // this.state.showSuccessFrame = false;
        //             alert('User available');
        //             // this.state.authenticated = false;
        //         } else {
        //             // this.state.showSuccessFrame = false;
        //             console.log('Adding user to fire');
        firebase
            .database()
            .ref('dealer_web/' + data.key)
            .push({
                first_name,
                middle_name,
                last_name,
                date_of_birth,
                ssn,
                email,
                phone,
                address,
                city,
                state,
                zip,
                employed,
                employer_name,
                job_title,
                emp_phone,
                income,
                start_date,
                income_ext,
            })
            .then(data => {
                console.log(data);
                let newState = {
                    authenticated: true,
                };
                this.setState(newState);
                alert('dealer added successfully');
            })
            .catch(error => {
                console.log(error);
                //error callback
                alert('dealer adding failed');
                let newState = {
                    authenticated: false,
                };
                this.setState(newState);
            });
        //     }
        // });
    }

    render() {

        const { values: {
            first_name,
            middle_name,
            last_name,
            date_of_birth,
            ssn,
            email,
            phone,
            address,
            city,
            state,
            zip,
            employed,
            employer_name,
            job_title,
            emp_phone,
            income,
            start_date,
            income_ext } } = this.props;
        return (
            <Fragment>
                <div style={{ width: '100%' }}>
                    <Container >
                        <h3>Review Information</h3>
                    </Container>

                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="First Name" secondary={first_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Middle Name" secondary={middle_name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={last_name} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Birthday" secondary={date_of_birth} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="SSN" secondary={ssn} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="phone" secondary={phone} />
                            </ListItem>
                        </Box>

                        <ListItem>
                            <ListItemText primary="Address" secondary={address} />
                        </ListItem>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">

                            <ListItem>
                                <ListItemText primary="City" secondary={city} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="State" secondary={state} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Zip" secondary={zip} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Employed" secondary={employed} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Employer Name" secondary={employer_name} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Job Title" secondary={job_title} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Employer Phone Number" secondary={emp_phone} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Annual Income" secondary={income} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Start Date" secondary={start_date} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Income Ext*" secondary={income_ext} />
                            </ListItem>
                        </Box>

                        <Button
                            style={{ marginBottom: 10 }}
                            variant="contained"
                            color="primary"
                            href="#contained-buttons"
                            onClick={this.continue} >Save</Button>
                    </Box>

                </div>
            </Fragment>
        )
    }
}
