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
                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">
                        <TextField
                            className={{margin: 5}}
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange('firstname')}
                            defaultValue={values.firstname} />
                        <TextField
                            // id="outlined-basic"
                            className={classes.root}
                            label="Middle Name"
                            variant="outlined"
                            onChange={handleChange('middlename')}
                            defaultValue={values.firstname} />
                        <TextField
                            // id="outlined-basic"
                            className={classes.root}
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('lastname')}
                            defaultValue={values.firstname} />
                        <TextField
                            className={classes.root}
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
                            className={classes.root}
                            // id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            onChange={handleChange('ssn')}
                            defaultValue={values.ssn} />
                        <Button
                            className={classes.root}
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
