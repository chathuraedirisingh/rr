import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormContactDetails from './FormContactDetails';
import FormEmployerDetails from './FormEmployerDetails';
import Confirm from './Confirm';

export default class UserForm extends Component {
    state = {
        step: 1,
        firstname: "",
        middlename: "",
        lastname: "",
        birthday: '',
        ssn: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        employed: "",
        employer_name: "",
        job_title: "",
        emp_phone: "",
        income: "",
        start_date: "",
        income_ext: ""
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
        // console.log(this.state);
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    componentDidMount() {
        console.log('first')
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('token')
        console.log(token)//123
    }

    render() {
        const { step } = this.state;
        const {
            firstname,
            middlename,
            lastname,
            birthday,
            ssn,

            email,
            phone,
            address,
            city,
            state,
            zip,

            employed,
            employer_name,
            job_title,
            emp_phone,
            income,
            start_date,
            income_ext
        } = this.state;

        const values = {
            firstname,
            middlename,
            lastname,
            birthday,
            ssn,
            email,
            phone,
            address,
            city,
            state,
            zip,
            employed,
            employer_name,
            job_title,
            emp_phone,
            income,
            start_date,
            income_ext
        };

        switch (step) {
            case 1:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 2:
                return (
                    <FormContactDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormEmployerDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )

            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }

        return (
            <div>

            </div>
        )
    }
}
