import React, { Component } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

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
                    <div style={{ width: '100%', margin: 16 }}>
                        <Box display="flex"
                            flexDirection="row"
                            p={1} m={1}
                            bgcolor="background.paper">
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
                            <TextField
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                hintText="First Name"
                                floatingLabelText="First Name"
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname} />

                        </Box>

                    </div>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
