import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.init";
import { useState } from "react";


const Login = () => {

    const [error , setError] = useState('')
    const [success , setSuccess] = useState('')

    const handleFrom = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(email,pass)
        setError('')
        setSuccess('')

        signInWithEmailAndPassword(auth, email,pass)
        .then(result =>{
            const register = result.user;
            console.log(register)
          if(register.emailVerified){
            setSuccess('User successfully Login')
          }
          else{
            alert('please verify your email')
            return
          }
        })
        .catch(error =>{
            console.log('error', error.message)
            setError('this is error')
            return
        })
    }


    return (
        <div>
         <div className=" w-1/2 mx-auto">
         <h1>This is Login</h1>  
           <form onSubmit={handleFrom}>
           <input className="border border-red-400 p-4 w-full mb-2 rounded" type="text" name="email" placeholder="enter email"/>
            <br />
            <input className="border border-red-400 p-4 w-full mb-2 rounded" type="pass" name="pass" placeholder="enter password"/>
            <br />
            <input className="bg-slate-600 p-4 w-full mb-2 rounded text-yellow-100 font-bold" type="submit" value="Register" />
            <span>
                {/* <Link></Link> */}
            </span>
           </form>
           {
            error&& <p className="text-center my-4 text-red-700">{error}</p>
           }
           {
            success&& <p className="text-center my-4 text-green-700">{success}</p>
           }
        </div>
        </div>
    );
};

export default Login;