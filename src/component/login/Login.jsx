import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    let userData = JSON.parse(localStorage.getItem("userData"));

    const addData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const saveData = (e) => {
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem("userData") || "[]");
        if (user.email) {
            let check = userData && userData.filter((data) => {
                if (user.email == data.email && user.password == data.password) {
                    return true;
                }
            })

            if (check.length > 0) {
                alert("User logged in successdully");
                navigate('/default')
            }
            else {
                alert("Invalid Credentials")
            }
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={saveData}>
                <Form.Field>
                    <input type='email' name='email' placeholder='Email' value={user.email} onChange={addData} required={true} />
                </Form.Field>
                <Form.Field>
                    <input type='password' name='password' placeholder='Password' value={user.password} onChange={addData} required={true} />
                </Form.Field>
                <Link to='/signup'>Create New Account</Link>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Login