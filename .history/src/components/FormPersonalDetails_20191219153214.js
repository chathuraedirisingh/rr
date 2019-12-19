import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";
import firebase from '../configs/firebase'

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const { values, handleChange } = this.props;
        // console.log("Values "+JSON.stringify(values))
        return (
            <Fragment>
                <div style={{ width: '100%' }}>
                    <Container >
                        <h3>Personal Information</h3>
                    </Container>

                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            required
                            style={{ marginBottom: 10 }}
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange('first_name')}
                            defaultValue={values.first_name}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Middle Name"
                            variant="outlined"
                            onChange={handleChange('middle_name')}
                            defaultValue={values.middle_name}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            required
                            style={{ marginBottom: 10 }}
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('last_name')}
                            defaultValue={values.last_name}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            required
                            style={{ marginBottom: 10 }}
                            id="date"
                            type="date"
                            label="Birthday"
                            variant="outlined"
                            onChange={handleChange('date_of_birth')}
                            defaultValue={values.date_of_birth}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            required
                            style={{ marginBottom: 10 }}
                            label="SSN"
                            variant="outlined"
                            onChange={handleChange('ssn')}
                            defaultValue={values.ssn}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <Button
                            // disabled={!values.ssn}
                            style={{ marginBottom: 10 }}
                            variant="contained"
                            color="primary"
                            href="#contained-buttons"
                            onClick={this.continue} >Next</Button>
                    </Box>

                    <Container >
                        <h6>Personal Information</h6>
                    </Container>

                </div>
            </Fragment>
        )
    }
}
