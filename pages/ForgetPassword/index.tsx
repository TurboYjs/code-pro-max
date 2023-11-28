import { useState } from "react";
import sideImage from "../../src/assets/side-image.webp";
import logo from "../../src/assets/logo.svg";
import ForgetPasswordForm from "../../src/components/ForgetPasswordForm";
import Link from "next/link";
// import { Link } from "react-router-dom";

export default function ForgetPasswordPage() {

    return(
        <div className="flex justify-center h-screen font-body">
            <div className="lg:w-1/2 w-screen flex lg:relative">
                <img className="m-8 lg:absolute lg:flex hidden" src={logo} alt="The Logo camp.in with two triangles juxtaposed and the text camp.in" />
                <div className="h-screen px-8 bg-formBackground rounded w-full md:min-w-[505px] lg:m-auto lg:w-2/3 lg:h-2/3 lg:px-28 lg:flex lg:items-center lg:justify-center">
                    <img className="my-8 lg:hidden" src={logo} alt="The Logo camp.in with two triangles juxtaposed and the text camp.in" />
                    <div className="w-full">
                        <ForgetPasswordForm />
                        <div className="mt-[14px] text-center">
                            <span>Don't have an account? <Link className="text-primaryColor" href={'/signup'}>Sign up!</Link></span>
                        </div>
                    </div>                    
                </div>
            </div>

            <div className="lg:w-1/2 lg:flex hidden">
                <img className="max-h-screen w-full object-cover" src={sideImage} alt="" />
            </div>            
        </div>
    )
}
