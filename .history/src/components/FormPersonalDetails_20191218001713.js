import React, { Component, Fragment, useState } from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { Box, Button } from '@material-ui/core';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Box } from "@material-ui/core";

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        const { values, handleChange } = this.props;
        // const [selectedDate, handleDateChange] = useState(new Date());

        return (
            <ThemeProvider>
                <Fragment>
                    <div style={{ width: '100%' }}>
                        <div display="flex"
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
                            <MuiPickersUtilsProvider>
                                <DatePicker
                                    disableFuture
                                    openTo="year"
                                    format="dd/MM/yyyy"
                                    label="Date of birth"
                                    views={["year", "month", "date"]}
                                // value={selectedDate}
                                // onChange={handleDateChange}
                                />
                            </MuiPickersUtilsProvider>
                            <Button
                                variant="contained"
                                color="primary"
                                href="#contained-buttons"
                                onClick={this.continue} >Next</Button>
                        </div>

                    </div>
                </Fragment>
            </ThemeProvider>
        )
    }
}
