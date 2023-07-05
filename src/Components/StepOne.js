import React from 'react'
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
const countryOptions = [
    { value: '+91', label: 'India', flag: '🇮🇳' },
    { value: '+1', label: 'USA', flag: '🇺🇸' },
    { value: '+86', label: 'China', flag: '🇨🇳' },
    { value: '+81', label: 'Japan', flag: '🇯🇵' },
    { value: '+44', label: 'UK', flag: '🇬🇧' },
    { value: '+33', label: 'France', flag: '🇫🇷' },
    { value: '+49', label: 'Germany', flag: '🇩🇪' },
    { value: '+7', label: 'Russia', flag: '🇷🇺' },
    { value: '+55', label: 'Brazil', flag: '🇧🇷' },
    { value: '+61', label: 'Australia', flag: '🇦🇺' },
    { value: '+20', label: 'Egypt', flag: '🇪🇬' },
    { value: '+27', label: 'South Africa', flag: '🇿🇦' },
    { value: '+54', label: 'Argentina', flag: '🇦🇷' },
    { value: '+82', label: 'South Korea', flag: '🇰🇷' },
    { value: '+91', label: 'Mexico', flag: '🇲🇽' },
    { value: '+39', label: 'Italy', flag: '🇮🇹' },
    { value: '+34', label: 'Spain', flag: '🇪🇸' },
    { value: '+63', label: 'Philippines', flag: '🇵🇭' },
    { value: '+234', label: 'Nigeria', flag: '🇳🇬' },
    { value: '+46', label: 'Sweden', flag: '🇸🇪' },
];

const StepOne = ({ name, email, phoneNumber, setName, setEmail, setPhoneNumber }) => {
    const CustomFlags = ({ selectedCountry }) => {
        const selectedOption = countryOptions.find(
            (option) => option.value === selectedCountry
        );

        return (
            <div className="custom-flags" >
                {selectedOption ? (
                    <span >{selectedOption.flag}</span>
                ) : (
                    <span>🌐</span>
                )}
            </div>
        );
    };
    return (
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone Number:</label>
            {/* <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            /> */}
            <PhoneInput
                id="phone"
                value={phoneNumber}
                onChange={setPhoneNumber}
                countryOptions={countryOptions}
                defaultCountry="IN"
                flagsComponent={CustomFlags}
                placeholder="Enter phone number"
            />
        </div>
    )
}

export default StepOne