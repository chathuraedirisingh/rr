import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";
import firebase from '../configs/firebase'

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    componentDidMount() {
        this.get_connection();
    }

    get_connection() {
        firebase
            .database()
            .ref('Dealers/')
            .once('value')
            .then(snapshot => {
                console.log(snapshot.val());
            });
    }

    render() {

        const { values, handleChange } = this.props;
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
                            required
                            style={{ marginBottom: 10 }}
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('lastname')}
                            defaultValue={values.firstname}
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
                            onChange={handleChange('birthday')}
                            defaultValue={values.birthday}
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
                            disabled={!values.birthday}
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
