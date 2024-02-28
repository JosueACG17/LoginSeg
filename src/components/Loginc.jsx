import React, { useState } from "react";
import "../styles/login.css"
import imagen from "../images/empresarios.png"
import logo from "../images/logo.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Loginc() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const ojovisible = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.includes(" ")) {
            setError("La contraseña no puede contener espacios en blanco");
        } else {
            setError("");
        }
    };

    return (
        <>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div
                        className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-8 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                        style={{
                            backgroundImage:
                                "url(http://www.utcancun.edu.mx/wp-content/uploads/2016/07/e75f02ac-c4da-4162-a1a7-5e8ef604e830.jpg)"
                        }}
                    >
                        <div className="absolute bg-gradient-to-b from-sky-800 to-green-900 opacity-80 inset-0 z-0" />
                        <div
                            className="absolute triangle  min-h-screen right-0 w-16"
                            style={{}}
                        />
                        <img
                            src={imagen}
                            className=" h-90 absolute right-0 ml-32 mt-52"
                            style={{ zIndex: 1 }}
                        />
                        <div className="w-full  max-w-md z-10">
                            <div className="sm:text-5xl xl:text-4xl font-bold leading-tight mb-40 custom-font text-center">
                                BIENVENIDO AL SERVICIO DE ESTADIAS
                            </div>
                        </div>

                        <ul className="circles ">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>

                    <div className="md:flex md:items-center w-full md:justify-center sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10  sm:rounded-lg md:rounded-none bg-white ">
                        <div className="max-w-md w-full mr-14">
                            <img src={logo} className="w-60 h-24 ml-24 mb-10 "></img>
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-teal-700 font-serif ml-5">
                                    Inicia Sesión
                                </h2>

                            </div>

                            <form className="space-y-7" action="#" method="POST" onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="relative">
                                    <label className="ml-3 text-normal font-bold text-gray-800 tracking-wide">
                                        Correo Electrónico:
                                    </label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <input
                                            className="w-full text-base px-4 py-2 border-b border-gray-600 focus:outline-none rounded-2xl focus:border-indigo-500 pl-11"
                                            type="email"
                                            placeholder="Ingresa tu correo"
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="mt-8">
                                    <label className="text-normal font-bold text-gray-800 tracking-wide">
                                        Contraseña:
                                    </label>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-600 dark:text-gray-500 absolute left-0 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <input
                                            className="w-full text-base px-4 py-2 pr-10 border-b rounded-2xl border-gray-600 focus:outline-none focus:border-indigo-500 pl-11"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Ingresa tu contraseña"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                            onClick={ojovisible}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {error && <p className="text-red-500 mt-2">{error}</p>}

                                </div>
                                <div >
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center bg-teal-700 hover:bg-green-800 text-gray-100  p-2 md:p-3 rounded-full tracking-wide font-black shadow-lg cursor-pointer transition ease-in duration-600 font-sans"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginc;