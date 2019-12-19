import React, { Component, Fragment, useState } from "react";
import { Button, TextField, Container, Box, Select, MenuItem } from "@material-ui/core";


export default class FormEmployerDetails extends Component {
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
                        <h3>Employement Information</h3>
                    </Container>

                    <Box display="flex"
                        flexDirection="column"
                        p={1} m={1}
                        bgcolor="background.paper">

                        <Box
                            display="flex"
                            alignItems='center'
                            flexDirection="row">
                            {/* <TextField
                                style={{ marginBottom: 10 }}
                                label="Employement Status"
                                variant="outlined"
                                onChange={handleChange('employed')}
                                defaultValue={values.employed}
                                InputLabelProps={{
                                    shrink: true,
                                }} /> */}

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="outlined"
                                style={{ minWidth: 200 }}
                                value={values.employed}
                                onChange={handleChange('employed')}
                            >
                                <MenuItem value="employed">Employed</MenuItem>
                                <MenuItem value="self employed">Self Employed / 1099</MenuItem>
                                <MenuItem value="retired">Retired</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>

                            <TextField
                                style={{ marginBottom: 10, marginLeft: 20 }}
                                label="Employer Name"
                                variant="outlined"
                                onChange={handleChange('employer_name')}
                                value={values.employer_name}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </Box>

                        <TextField
                            type='text'
                            style={{ marginBottom: 10 }}
                            label="Job Title"
                            variant="outlined"
                            onChange={handleChange('job_title')}
                            value={values.job_title}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            type="tel"
                            style={{ marginBottom: 10 }}
                            label="Phone Number"
                            variant="outlined"
                            onChange={handleChange('emp_phone')}
                            value={values.emp_phone}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <TextField
                            style={{ marginBottom: 10 }}
                            label="Annual Income"
                            variant="outlined"
                            onChange={handleChange('income')}
                            value={values.income}
                            InputLabelProps={{
                                shrink: true,
                            }} />

                        <TextField
                            style={{ marginBottom: 10 }}
                            id="date"
                            type="date"
                            label="Start Date"
                            variant="outlined"
                            onChange={handleChange('start_date')}
                            value={values.start_date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {/* <Link */}

                        <Box
                            display="flex"
                            alignContent="center"
                            flexDirection="row">
                            <Button
                                size="large"
                                style={{ marginBottom: 10, width: '50%' }}
                                variant="contained"
                                color="default"
                                onClick={this.previous} >Back</Button>
                            <Button
                                size="large"
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
