import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { auth } from "../Firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Regester = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPass, setShowPass] = useState(false)
    const emailRef = useRef(null)

    const handleFrom = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log(name,email, pass)
        setError('')
        setSuccess('')

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const register = result.user;
                console.log(register)
                setSuccess('Successfully Login')
                // update profile 
updateProfile(register,{
    displayName: name,
    photoURL: 'cdfvfvgf'
})
.then( () =>console.log('vv'))
.catch(error =>console.log(error))

                // varefy email 
                sendEmailVerification(register)
                .then( ()=>{
                    console.log('please verify your email')
                })
            })
            .catch(error => {
                console.log('error', error.message)
                setError('this is error')
                return
            })
    }

const resetPassword = () =>{
    const email =emailRef.current.value;
    if(!email){
        console.log('provide your email')
        return
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        console.log('please write a valid email')
        return
    }

    sendPasswordResetEmail(auth, email)
    .then()
    .catch(error => console.log(error))
}

    return (
        <div className=" w-1/2 mx-auto">
            <h3>This is Register</h3>
            <form onSubmit={handleFrom}>
                <input className="border border-red-400 p-4 w-full mb-2 rounded" type="text" name="name"  placeholder="enter name" />
                <br />
                <input className="border border-red-400 p-4 w-full mb-2 rounded" type="text" name="email" ref={emailRef} placeholder="enter email" />
                <br />
                <input className="border border-red-400 p-4 w-full mb-2 rounded" type={showPass ? 'text' : "password"} name="pass" placeholder="enter password" />
                <span onClick={() => setShowPass(!showPass)}>
                    {
                        !showPass ? <IoEyeOffSharp /> : <IoEyeOutline />
                    }
                </span>
                <span> <Link onClick={resetPassword}>Forget Password</Link></span>
                <input className="bg-slate-600 p-4 w-full mb-2 rounded text-yellow-100 font-bold" type="submit" value="Register" />
            </form>
            {
                error && <p className="text-center my-4 text-red-700">{error}</p>
            }
            {
                success && <p className="text-center my-4 text-green-700">{success}</p>
            }
        </div>
    );
};

export default Regester;