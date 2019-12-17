import React, { Component } from 'react'

export default class UserForm extends Component {
    state = {
        step: 1,
        firstname: "",
        middlename: "",
        lastname: "",
        birthday: {},
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
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

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

        switch(step){
            case 1:
                return 
        }

        return (
            <div>

            </div>
        )
    }
}
