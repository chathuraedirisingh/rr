import React, { Component } from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
