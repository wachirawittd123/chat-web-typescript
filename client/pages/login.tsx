import axios from "axios";
import Router from "next/router";
import { useCallback } from "react";
import ToastMessage from "../components/toast";

const LoginPage = () => {

    const notify = useCallback((type, message) => {
        ToastMessage({ type, message })
    }, [])

    const _Submit = async(e) => {
        e.preventDefault();
        try {
            const result = await axios({
                method: "post",
                url: `/api/auth/login`,
                data: {
                    email: e.target.elements.email?.value,
                    password: e.target.elements.password?.value
                }
            })
            if(result?.data?.result?.uid) {
                notify("success", "Login success")
                Router.push("/")
            }
            return;
        } catch (err:any) {
            notify("error", err?.response?.data?.message.toString())
        }
    }

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={_Submit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage