import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box } from "@material-ui/core";
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };




    render() {
        const { values, handleChange } = this.props;
        // const [selectedDate, handleDateChange] = useState(new Date());

        // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

        // const handleDateChange = date => {
        //     setSelectedDate(date);
        // };

        const handleDateChange = date => {
            // this.setState({
            //     [input]: e.target.value
            // });
            console.log(date)
        };
        return (
            <Fragment>
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
                        <TextField
                            // id="outlined-basic"
                            label="Birthday"
                            variant="outlined"
                            onChange={handleChange('birthday')}
                            defaultValue={values.birthday} />
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
