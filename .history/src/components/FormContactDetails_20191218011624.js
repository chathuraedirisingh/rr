import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";


export default class FormContactDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {

        const { values, handleChange } = this.props;
        return (
            <Fragment>
                <div style={{ width: '100%' }}>
                    <h3>Contact Details</h3>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            type='email'
                            style={{ marginBottom: 10 }}
                            label="Email"
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
                            label="Address"
                            variant="outlined"
                            onChange={handleChange('address')}
                            defaultValue={values.address}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <Box
                            display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <TextField
                                style={{ marginBottom: 10 }}
                                label="City"
                                variant="outlined"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <TextField
                                style={{ marginBottom: 10 }}
                                label="Zip"
                                variant="outlined"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
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
