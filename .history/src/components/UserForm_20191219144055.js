import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormContactDetails from './FormContactDetails';
import FormEmployerDetails from './FormEmployerDetails';
import Confirm from './Confirm';
import firebase from '../configs/firebase';
export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            firebase: {}
        };
    }




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
            console.log(foo);
            this.get_data(foo);
        }
    }

    delta(key,value){
        this.setState({
            [key]: value
        })
    }

    get_data(key) {
        firebase
            .database()
            .ref('dealer_web/' + key)
            .once("value", function (snapshot) {
                console.log(snapshot.val());
                // this.set_data(snapshot.val());
                // this.setState({ firebase: snapshot.val() })
                snapshot.forEach(function (child) {
                    var el = child.key;
                    var value2 = child.val();
                    try {
                        delta(el,value2);
                    } catch (e) {
                        console.log(e)
                    }
                });
                // console.log(this.state);
            });
        // this.setState({ data });
        // console.log(this.state);
    }

    set_data(snap) {
        console.log(snap)
        // this.setState({ firebase: snap });
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
            verified
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
            verified
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
