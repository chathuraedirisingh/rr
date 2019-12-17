import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box, List, ListItem } from "@material-ui/core";


export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const { values: { firstname,
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
                    <h3>Personal Information</h3>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">

                        <List>
                            <ListItem
                                primaryText="First Name"
                                secondaryText={firstname} />

                            <ListItem
                                primaryText="Middle Name"
                                secondaryText={middlename} />

                            <ListItem
                                primaryText="Last Name"
                                secondaryText={lastname} />

                            <ListItem
                                primaryText="Birthday"
                                secondaryText={birthday} />

                            <ListItem
                                primaryText="SSN"
                                secondaryText={ssn} />

                            <ListItem
                                primaryText="Email"
                                secondaryText={email} />
                            <ListItem
                                primaryText="Contact Number"
                                secondaryText={phone} />
                            <ListItem
                                primaryText="Address"
                                secondaryText={PaymentAddress} />
                            <ListItem
                                primaryText="city"
                                secondaryText={city} />
                            <ListItem
                                primaryText="State"
                                secondaryText={state} />
                            <ListItem
                                primaryText="Zip"
                                secondaryText={zip} />
                                <ListItem
                                primaryText="Employed"
                                secondaryText={employed} />
                                <ListItem
                                primaryText="Employer Name"
                                secondaryText={employer_name} />
                                <ListItem
                                primaryText="Job Title"
                                secondaryText={job_title} />
                                <ListItem
                                primaryText="Employer Contact Number"
                                secondaryText={emp_phone} />
                                <ListItem
                                primaryText="Income"
                                secondaryText={income_ext} />
                                <ListItem
                                primaryText="Start Date"
                                secondaryText={start_date} />
                                <ListItem
                                primaryText="Extra Income"
                                secondaryText={income_ext} />
                        </List>

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
