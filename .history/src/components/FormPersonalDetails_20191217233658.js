import React, { Component } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { values, handleChange } = this.props;
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

        const handleDateChange = date => {
            setSelectedDate(date);
        };
        return (
            <ThemeProvider>
                <React.Fragment>
                    <div style={{ width: '100%' }}>
                        <Box display="flex"
                            flexDirection="column"
                            p={1} m={1}
                            bgcolor="background.paper">
                            <TextField
                                // id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                onChange={handleChange('firstname')}
                                defaultValue={values.firstname} />
                            <TextField
                                // id="outlined-basic"
                                label="Middle Name"
                                variant="outlined"
                                onChange={handleChange('middlename')}
                                defaultValue={values.firstname} />
                            <TextField
                                // id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                onChange={handleChange('lastname')}
                                defaultValue={values.firstname} />

                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
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
