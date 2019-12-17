import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box, List, ListItem, ListItemText } from "@material-ui/core";


export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();

        //fire up
        // this.props.nextStep();
    };

    render() {

        const { values: {
            firstname,
            middlename,
            lastname,
            birthday,
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
                    <h3>Review Information</h3>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="First Name" secondary={firstname} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Middle Name" secondary={middlename} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastname} />
                            </ListItem>
                        </Box>

                        <Box display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <ListItem>
                                <ListItemText primary="Birthday" secondary={birthday} />
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
                            onClick={this.continue} >Next</Button>
                    </Box>

                </div>
            </Fragment>
        )
    }
}
