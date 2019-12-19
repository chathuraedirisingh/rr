import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormContactDetails from './FormContactDetails';
import FormEmployerDetails from './FormEmployerDetails';
import Confirm from './Confirm';
import firebase from '../configs/firebase';
export default class UserForm extends Component {
    state = {
        step: 1,
        first_name: "",
        middle_name: "",
        last_name: "",
        document_number: '',
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
        income_ext: "",
        date_of_birth: "",
        date_of_expiry: "",
        date_of_issue: "",
        document_image: "",
        face_image: "",
        sex: "",
        verified: "",
        userdata: "",
        key: ''
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
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('key');

        if (!foo === null || foo === undefined) {
            console.log("undefined")
        } else {
            this.setState({
                key: foo
            });

            var userdata;
            const user_ref = firebase.database().ref('dealer_web/' + foo);
            user_ref.on('value', snapshot => {
                userdata = snapshot.val();
                this.setState({
                    first_name: userdata.first_name,
                    middle_name: userdata.middle_name,
                    last_name:userdata.last_name,
                    date_of_birth:userdata.date_of_birth,
                    ssn:userdata.ssn,
                    email:userdata.email,
                    phone:userdata.phone,
                    address:userdata.address,
                    city:userdata.city,
                    state:userdata.state,
                    zip:userdata.zip,
                    employed:userdata.employed,
                    employer_name:userdata.employer_name,
                    emp_phone:userdata.emp_phone,
                    income:userdata.income,
                    start_date:userdata.start_date,
                });
            })

            this.forceUpdate()

            console.log("Now State " + JSON.stringify(this.state))
        }
    }

    render() {
        const { step } = this.state;
        const {
            first_name,
            middle_name,
            last_name,
            document_number,
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
            income_ext,
            date_of_birth,
            date_of_expiry,
            date_of_issue,
            document_image,
            face_image,
            sex,
            verified, key,
            userdata
        } = this.state;

        const values = {
            first_name,
            middle_name,
            last_name,
            document_number,
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
            income_ext,
            date_of_birth,
            date_of_expiry,
            date_of_issue,
            document_image,
            face_image,
            sex,
            verified, key,
            userdata
        };

        // this.get_data(values.key)

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
