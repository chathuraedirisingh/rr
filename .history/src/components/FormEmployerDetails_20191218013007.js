import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";


export default class FormEmployerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        const { values, handleChange } = this.props;
        return (
            <Fragment>
                <div style={{ width: '100%' }}>
                    <h3>Employement Information</h3>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">

                        <Box
                            display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <TextField
                                style={{ marginBottom: 10 }}
                                label="Employement Status"
                                variant="outlined"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <TextField
                                style={{ marginBottom: 10, marginLeft: 20 }}
                                label="Employer Name"
                                variant="outlined"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Box>

                        <TextField
                            type='text'
                            style={{ marginBottom: 10 }}
                            label="Job Title"
                            variant="outlined"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            type="tel"
                            style={{ marginBottom: 10 }}
                            label="Phone Number"
                            variant="outlined"
                            onChange={handleChange('phone')}
                            defaultValue={values.phone}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Annual Income"
                            variant="outlined"
                            onChange={handleChange('address')}
                            defaultValue={values.address}
                            InputLabelProps={{
                                shrink: true,
                            }} />

                        <TextField
                            style={{ marginBottom: 10 }}
                            id="date"
                            type="date"
                            label="Start Date"
                            variant="outlined"
                            onChange={handleChange('birthday')}
                            defaultValue={values.birthday}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {/* <Link */}

                    </Box>

                </div>
            </Fragment>
        )
    }
}
