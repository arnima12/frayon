import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';



const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const handleSignup = data => {
        console.log(data);
        setSignUpError(' ');
        createUser(data.email, data.password)
            .then(result => {
                console.log("user", result.user)
                toast.success("User created successfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                        
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    .catch((error) => {
                        setSignUpError(error.message)

                    });
                    
                
            })
        const saveUser = (name, email) => {
            const user = { name, email };
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setCreatedUserEmail(email);
                    navigate('/')
                })
        }
    }
return (
        <div className="h-[800px] flex flex-col justify-center items-center">
            <div className="w-96">
                <h1 className="text-2xl text-center">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Name</span>
                        </label>
                        <input {...register("name", { required: "Enter your name" })} className="input input-bordered w-full " />
                        <label className="label">
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            <span className="label-text font-semibold text-xl">Email</span>
                        </label>
                        <input {...register("email", { required: "Enter your email" })} className="input input-bordered w-full " />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Password</span>
                        </label>
                        <input {...register("password", { required: "Enter your password", minLength: { value: 8, message: "Password must be 8 characters long" }, pattern: { value: /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/, message: "Password must be strong" } })} className="input input-bordered w-full " />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <input className="btn btn-accent w-full mt-8" type="submit" value="Create Account" />
                    <Toaster/>
                    {signUpError && <p className="text-red-500">{signUpError}</p>}

                </form>
                <p className=" mt-4">Already have an account ? <Link className="text-secondary" to="/login">Login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider mt-8">OR</div>
                    <button className="btn btn-outline w-96 ">
                        CONTINUE WITH GOOGLE
                    </button><div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;