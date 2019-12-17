import React, { Component } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>
                    <div style={{ width: '100%' }}>
                        <Box display="flex"
                            flexDirection="column"
                            p={1} m={1}
                            bgcolor="background.paper">
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                hintText="First Name"
                                // floatingLabelText="First Name"
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname} />
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                hintText="First Name"
                                floatingLabelText="First Name"
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname} />
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                hintText="First Name"
                                floatingLabelText="First Name"
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname} />
                            <Button
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={this.continue} >Next</Button>
                        </Box>

                    </div>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
