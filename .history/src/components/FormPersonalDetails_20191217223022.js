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
                    <div style={{ margin: 16 }}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}
