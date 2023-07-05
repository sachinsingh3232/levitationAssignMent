import React, { useEffect } from 'react'

const StepFour = ({ multiFiles, setMultiFiles, setGeolocationStatus, geolocationStatus }) => {
    useEffect(() => {
        if (multiFiles.length === 6) {
            setMultiFiles((multiFiles) => multiFiles.filter((_, index) => index !== 0));
        }
        // console.log(multiFiles.length);
    }, [multiFiles])


    const handleCaptureGeolocation = () => {
        // Simulating geolocation capture process
        setGeolocationStatus('Acquiring geolocation...');

        // Simulating delay to acquire coordinates
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position);
                setGeolocationStatus(position.coords.latitude + ", " + position.coords.longitude);
            });
        }, 2000);
    };

    return (
        <div>
            <label>Upload Multiple Files (PNG/PDF):</label>
            <input
                type="file"
                accept=".png,.pdf"
                multiple
                onChange={(e) => {
                    setMultiFiles([...e.target.files]);
                }}
            />
            <label>Geolocation Status: {geolocationStatus}</label>
            <button onClick={handleCaptureGeolocation}>Capture Geolocation</button>
        </div>
    )
}

export default StepFour