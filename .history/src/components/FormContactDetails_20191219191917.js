import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";


export default class FormContactDetails extends Component {
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
                    <Container >
                        <h3>Contact Information</h3>
                    </Container>
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            required
                            type='email'
                            style={{ marginBottom: 10 }}
                            label="Email"
                            variant="outlined"
                            onChange={handleChange('email')}
                            value={values.email}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            required
                            type="tel"
                            style={{ marginBottom: 10 }}
                            label="Phone Number"
                            variant="outlined"
                            onChange={handleChange('phone')}
                            value={values.phone}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Address"
                            variant="outlined"
                            onChange={handleChange('address')}
                            value={values.address}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="City"
                            variant="outlined"
                            onChange={handleChange('city')}
                            value={values.city}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <Box
                            display="flex"
                            alignItems='center'
                            flexDirection="row">
                            <TextField
                                style={{ marginBottom: 10 }}
                                label="State"
                                variant="outlined"
                                onChange={handleChange('state')}
                                value={values.state}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                            <TextField
                                style={{ marginBottom: 10, marginLeft: 20 }}
                                label="Zip"
                                variant="outlined"
                                onChange={handleChange('zip')}
                                value={values.zip}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Box>

                        <Box
                            display="flex"
                            alignContent="center"
                            flexDirection="row">
                            <Button
                                style={{ marginBottom: 10, width: '50%' }}
                                variant="contained"
                                color="default"
                                onClick={this.previous} >Back</Button>
                            <Button
                                // disabled={!values.phone}
                                style={{ marginBottom: 10, marginLeft: 20, width: '50%' }}
                                variant="contained"
                                color="primary"
                                onClick={this.continue} >Next</Button>
                        </Box>

                    </Box>
                    <Container >
                        <h6>for demo only</h6>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
