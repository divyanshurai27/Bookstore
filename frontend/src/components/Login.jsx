import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        try {
            const res = await axios.post("http://localhost:4001/user/login", userInfo);
            if (res.data) {
                toast.success("Login successfully!");
                setTimeout(()=>{
               document.getElementById("my_modal_3").close();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                window.location.reload();
                },1000);       
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Login failed";
            toast.error(message);
            setTimeout(()=>{},3000)
            console.log(error);
        }
    };

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box relative">

                {/* CLOSE BUTTON */}
                <button
                    type="button"
                    onClick={() => document.getElementById("my_modal_3").close()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>

                {/* FORM START */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">Login</h3>

                    {/* EMAIL */}
                    <div className="mt-4 space-y-2">
                        <span>Email</span><br />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                            autoComplete="email"
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span><br />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-80 px-3 py-1 border rounded-md outline-none"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-around mt-4">
                        <button
                            type="submit"
                            className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200"
                        >
                            Login
                        </button>

                        <p>
                            Not registered?{" "}
                            <Link to="/signup" className="underline text-blue-500">
                                Signup!
                            </Link>
                        </p>
                    </div>
                </form>
                {/* FORM END */}
            </div>
        </dialog>
    );
}

export default Login;
