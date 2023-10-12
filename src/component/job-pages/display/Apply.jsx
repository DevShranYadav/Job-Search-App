import React, { useState } from 'react'
import { Button, Link, Form } from 'semantic-ui-react'

function Apply() {
    const [user, setUser] = useState({ fullName: "", email: "" });    
    const [selectedFile, setSelectedFile] = useState(null);
    const addData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
      const handleFileUpload = () => {
        if (selectedFile) {
          // Add code here to upload the selected file (e.g., to a server or cloud storage).
          console.log('Uploading file:', selectedFile);
        } else {
          alert('Please select a file to upload.');
        }
      };
    const saveData = (e) => {
        e.preventDefault();
        if (user.email) {
            alert("Your are successfully applied ");
        }
    }
    
    return (
        <>
            <h2>Apply For the job</h2>
            <Form onSubmit={saveData}>
                <Form.Field>
                    <input type='text' name='fullName' placeholder='FullName' value={user.fullName} onChange={addData} required={true} />
                </Form.Field>
                <Form.Field>
                    <input type='email' name='email' placeholder='Email' value={user.email} onChange={addData} required={true} />
                </Form.Field>
                <h5>Cover Letter Note</h5>
                <Form.Field>
                    <div class="ui input"><input type="text" placeholder="Text if you want" /></div>
                </Form.Field>
                <div>
                    <label>Attach Resume</label>
                    <input type="file" onChange={handleFileChange} required={true} />
                    <button onClick={handleFileUpload}>Upload File</button>
                </div>
                <Button type='submit'>Submit</Button>
            </Form></>
    )
}

export default Apply