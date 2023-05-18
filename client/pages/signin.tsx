import axios from "axios";
import Router from "next/router";
import { useCallback, useState } from "react";
import ToastMessage from "../components/toast";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/common";

const SignInPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message })
    }, [])

    const _Submit = async(e) => {
        try {
            const result = await axios({
                method: "post",
                url: `/api/auth/login`,
                data: {
                    email: e?.email,
                    password: e?.password
                }
            })
            if(result?.data?.result?.uid) {
                notify("success", "Signin success")
                Router.push("/")
            }
            return;
        } catch (err:any) {
            notify("error", err?.response?.data?.message.toString())
        }
    }

    return (
        <div className='h-screen flex home'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleSubmit(_Submit)} id="form1">
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full px-4 py-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Email'
                            {...register("email", { required: true })}
                        />
                        { errors?.email && <ErrorMessage message="Please enter your email?" mTop="-10px"/>}
                    </div>
                    <div className="relative w-4/4 ">
                        <label htmlFor='password'>Password</label>
                        <input
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                            {...register("password", { required: true })}
                        />
                        { errors?.password && <ErrorMessage message="Please enter your password?" mTop="6px"/>}
                        <button
                            type="button"
                            className={`absolute inset-y-0 right-0 ${errors?.password ? "top-1" : "top-6"} flex items-center px-2 text-gray-600`}
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        >
                            {isPasswordVisible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                            ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            )}
                        </button>
                    </div>
                </form>
                <div className='flex justify-center items-center mt-6'>
                    <button
                        type="submit" 
                        form="form1"
                        value="Submit"
                        className={`bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Login
                    </button>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <span className="text-xs">Don {"'"}t have an account yet?</span>
                    <Link className="text-sm font-black text-blue-500 ml-1" href="/signup">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPage