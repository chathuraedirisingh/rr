import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";


export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const { values, handleChange } = this.props;
        return (
            <Fragment>
                <div style={{ width: '100%' }}>
                    <h3>Personal Details</h3>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange('firstname')}
                            defaultValue={values.firstname}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Middle Name"
                            variant="outlined"
                            onChange={handleChange('middlename')}
                            defaultValue={values.firstname}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('lastname')}
                            defaultValue={values.firstname}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            id="date"
                            type="date"
                            label="Birthday"
                            variant="outlined"
                            onChange={handleChange('birthday')}
                            defaultValue={values.birthday}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            style={{ marginBottom: 10 }}
                            label="SSN"
                            variant="outlined"
                            onChange={handleChange('ssn')}
                            defaultValue={values.ssn}
                            InputLabelProps={{
                                shrink: true,
                            }} />
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
