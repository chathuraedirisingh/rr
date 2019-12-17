import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
});

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
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            className={{margin: 20}}
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange('firstname')}
                            defaultValue={values.firstname} />
                        <TextField
                            
                            label="Middle Name"
                            variant="outlined"
                            onChange={handleChange('middlename')}
                            defaultValue={values.firstname} />
                        <TextField
                            
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('lastname')}
                            defaultValue={values.firstname} />
                        <TextField
                            
                            id="date"
                            type="date"
                            label="Birthday"
                            variant="outlined"
                            onChange={handleChange('birthday')}
                            defaultValue={values.birthday}
                            InputLabelProps={{
                                shrink: true,
                            }} />

                        <TextField
                            
                            // id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('ssn')}
                            defaultValue={values.ssn} />
                        <Button
                            
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
