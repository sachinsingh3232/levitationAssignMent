import React, { useEffect, useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import StepOne from '../../Components/StepOne';
import StepTwo from '../../Components/StepTwo';
import StepThree from '../../Components/StepThree';
import StepFour from '../../Components/StepFour';
import axios from 'axios'

const Form = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState();
    const [country, setCountry] = useState('');
    const [files, setFiles] = useState(null);
    const [multiFiles, setMultiFiles] = useState([]);
    const [geolocationStatus, setGeolocationStatus] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) navigate("/");
    }, [])


    const handleNext = () => {
        if (step === 1) {
            if (!name || !email || !phoneNumber) {
                alert('all fields are required');
            }
            else {
                setStep(step + 1);
            }
        }
        else if (step === 2) {
            if (!addressLine1 || !addressLine2 || !city || !state || !pincode || !country) {
                alert('all fields are required');
            }
            else {
                setStep(step + 1);
            }
        }
        else if (step === 3) {
            if (!files) {
                alert('select a file');
            }
            else {
                setStep(step + 1);
            }
        }
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };


    const handleSubmit = () => {
        // Perform form submission logic here
        if (!multiFiles.length || !geolocationStatus) {
            alert('all fields are required');
        }
        alert('cheking credentials');

        const reader = new FileReader();
        reader.onload = async () => {
            const binaryString = reader.result;
            const data = {
                "name": name,
                "email": email,
                "phone_number": phoneNumber,
                "address_1": addressLine1,
                "address_2": addressLine2,
                "city": city,
                "state": state,
                "pincode": pincode,
                "country": country,
                "geolocation": geolocationStatus,
                "single_file": btoa(binaryString),
                "multi_ups1": multiFiles[0],
                "multi_ups2": multiFiles.length > 1 ? multiFiles[1] : "",
                "multi_ups3": multiFiles.length > 2 ? multiFiles[2] : "",
                "multi_ups4": multiFiles.length > 3 ? multiFiles[3] : "",
                "multi_ups5": multiFiles.length > 4 ? multiFiles[4] : "",
            }
            console.log('Form submitted!');
            console.log(data)
            try {
                const res = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form',
                    data, {
                    "Authentication": localStorage.getItem("token")
                }
                )
                console.log(res.response.data);
                setStep(step + 1);
            } catch (e) {
                setStep(step + 1);
                // alert('failed');
                console.log(e)
            }
        };
        reader.readAsBinaryString(files[0])
    };
    const handlelogOut = () => {
        localStorage.removeItem("token");
        navigate('/')
        console.log('logged Out!');
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <StepOne name={name} email={email} phoneNumber={phoneNumber} setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} />
                );
            case 2:
                return (
                    <StepTwo
                        addressLine1={addressLine1}
                        addressLine2={addressLine2}
                        city={city}
                        state={state}
                        pincode={pincode}
                        country={country}
                        setAddressLine1={setAddressLine1}
                        setAddressLine2={setAddressLine2}
                        setCity={setCity}
                        setState={setState}
                        setPincode={setPincode}
                        setCountry={setCountry}
                    />
                );
            case 3:
                return (
                    <StepThree setFiles={setFiles} />
                );
            case 4:
                return (
                    <StepFour
                        multiFiles={multiFiles}
                        setMultiFiles={setMultiFiles}
                        setGeolocationStatus={setGeolocationStatus}
                        geolocationStatus={geolocationStatus}
                    />
                );
            case 5:
                return (
                    <div>
                        <label>Form Status: Completed</label>
                    </div>
                );
            default:
                return null;
        }
    };

    const renderProgressBar = () => {
        return (
            <div className="progress-bar">
                <div
                    className={`progress-bar-fill step-${step}`}
                    style={{ width: `${(step / 5) * 100}%` }}
                ></div>
            </div>
        );
    };

    return (
        <div>
            {renderProgressBar()}
            <div className="form">
                {renderStepContent()}
                <div className="button-container">
                    {step > 1 && step < 5 && <button onClick={handlePrevious}>Previous</button>}
                    {step < 4 && <button onClick={handleNext}>Next</button>}
                    {step === 4 && <button onClick={handleSubmit}>Submit</button>}
                    {step === 5 && <button onClick={handlelogOut}>logOut</button>}
                </div>
            </div>
        </div >
    );
};

export default Form;
