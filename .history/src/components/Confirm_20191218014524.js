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
                            <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
                                <ListItem primaryText="First Name"
                                secondaryText={fiesrname} />
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
