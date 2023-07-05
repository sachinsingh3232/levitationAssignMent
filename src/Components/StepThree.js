import React from 'react'

const StepThree = ({ setFiles }) => {
    return (
        <div>
            <label>Upload File (PNG/PDF):</label>
            <input
                type="file"
                accept=".png,.pdf"
                onChange={(e) => setFiles([e.target.files[0]])}
            />
        </div>
    )
}

export default StepThree