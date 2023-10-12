import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

function SignUp() {
    const [user,setUser]=useState({fullName:"",email:"",password:"",phone:""});

    const addData = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const saveData = (e)=>{
        e.preventDefault();
        let userData = JSON.parse(localStorage.getItem("userData") || "[]");
        if(user.email){
            let checkForDuplicate = userData && userData.filter((data)=>{
                if(user.email === data.email) return true;
            });

            if(checkForDuplicate.length === 0){
                userData.push(user);
                localStorage.setItem("userData",JSON.stringify(userData))
            }
            else{
                alert("user Already exists")
            }
        }
    }
  return (
    <div>
        <h2>Sign-Up</h2>
         <Form onSubmit={saveData}>
                <Form.Field>
                    <input type='text' name='fullName' placeholder='FullName' value={user.fullName} onChange={addData} required={true}/>
                </Form.Field>
                <Form.Field>
                    <input type='email' name='email' placeholder='Email' value={user.email} onChange={addData} required={true}/>
                </Form.Field>
                <Form.Field>
                    <input type='password' name = 'password' placeholder='Password' value={user.password} onChange={addData} required={true}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' name='phone' placeholder='Mobile Number' value={user.phone} onChange={addData}/>
                </Form.Field>
                <Link to='/'> GO To Login</Link>
                <Button type='submit'>Submit</Button>
            </Form>
    </div>
  )
}

export default SignUp