import Image from 'next/image'

const LoginPage = () => {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <form
        //     //   onSubmit={handleSubmit}
        //     className="flex flex-col w-full max-w-md p-4 bg-white rounded-lg shadow-md"
        //     >
        //     <h1 className="mb-4 text-2xl font-bold">Log in</h1>
        //     <label className="mb-2 font-semibold" htmlFor="email">
        //         Email
        //     </label>
        //     <input
        //         className="px-4 py-2 mb-4 border rounded-md"
        //         type="email"
        //         id="email"
        //         // value={email}
        //         // onChange={(event) => setEmail(event.target.value)}
        //     />
        //     <label className="mb-2 font-semibold" htmlFor="password">
        //         Password
        //     </label>
        //     <input
        //         className="px-4 py-2 mb-4 border rounded-md"
        //         type="password"
        //         id="password"
        //         // value={password}
        //         // onChange={(event) => setPassword(event.target.value)}
        //     />
        //     <button
        //         className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        //             submit
        //         </button>
        //     </form>
        // </div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage