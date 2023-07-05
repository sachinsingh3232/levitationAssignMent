import React from 'react'

const StepTwo = ({ addressLine1, addressLine2, city, state, pincode, country, setAddressLine1, setAddressLine2, setCity, setState, setPincode, setCountry }) => {
    return (
        <div>
            <label>Address Line 1:</label>
            <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
            />
            <label>Address Line 2:</label>
            <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
            />
            <label>City:</label>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <label>State:</label>
            <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <label>Pincode:</label>
            <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
            />
            <label>Country:</label>
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
        </div>
    )
}

export default StepTwo