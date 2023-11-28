import { Lock, EnvelopeSimple, SignIn } from "phosphor-react";
import {useRouter} from "next/router";

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { signIn } from "next-auth/react"
const formSchema = z.object({
    email: z.string().email({
        message: "Email is required.",
    }),
    password: z.string().nonempty({ message: "Password is required" }),
})
export default function LoginForm() {

    const router = useRouter()

    function handleForgetPassword() {
        router.push('/ForgetPassword')
    }
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (
        values: z.infer<typeof formSchema>
    ): Promise<void> => {
        setIsLoading(true)
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            callbackUrl: `/`,
            redirect: false,
        })
        if (res?.error) {
            setError(res?.error)
            setIsLoading(false)
        } else {
            router.push("/")
        }
    }
    return(
        <>
            <div className="mb-[27px] flex flex-col gap-1">
                <span className="cursor-pointer text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3 items-center" onClick={()=> {
                    router.push('/SignOn')
                }}>
                    <SignIn className="w-7 h-7 text-primaryColor" weight="bold" />
                    Sign up
                </span>
                <span className="font-body font-medium text-base text-textBase flex">
                    Enter your registration information.
                </span>
            </div>
            <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit(onSubmit)}>
                <div id="email-group">
                    <span className="font-titles text-base font-medium">E-mail</span>
                    <label className="relative block" htmlFor="email">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <EnvelopeSimple />
                        </span>
                        <input
                            {...register('email')}
                            type="email"
                            className="
                                peer
                                h-[44px]
                                block
                                py-2
                                pl-9
                                pr-3
                                w-full
                                rounded
                                bg-transparent
                                border-[#868686]
                                placeholder-[#a9afb9]
                                placeholder:text-sm
                                focus:outline-none
                                focus:ring-1
                                focus:ring-primaryColor
                                focus:border-primaryColor
                                focus:invalid:ring-[#F33D3D]
                                focus:invalid:border-[#F33D3D]
                                transition-all
                                "
                            name="email"
                            id="email"
                            required
                            placeholder="Enter your e-mail"></input>
                            {/* <p className="
                                mt-1
                                text-sm
                                text-[#F33D3D]
                                invisible
                                peer-invalid:visible
                                transition-all
                                ">
                                    Digite um e-mail válido
                            </p> */}
                    </label>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div id="password-group">
                <span className="font-titles text-base font-medium">Password</span>
                    <label className="relative block" htmlFor="password">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Lock />
                        </span>
                        <input
                            {...register('password')}
                            type="password"
                            className="
                                h-[44px]
                                block
                                py-2
                                pl-9
                                pr-3
                                w-full
                                rounded
                                bg-transparent
                                border-[#868686]
                                placeholder-[#a9afb9]
                                placeholder:text-sm
                                focus:outline-none
                                focus:ring-1
                                focus:ring-primaryColor
                                focus:border-primaryColor
                                focus:invalid:ring-[#F33D3D]
                                focus:invalid:border-[#F33D3D]
                                "
                            name="password"
                            id="password"
                            required
                            placeholder="Enter your password" />
                    </label>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="flex justify-between">
                    <div>
                        <input className="w-[20px] h-[20px] bg-transparent rounded text-primaryColor focus:ring-primaryColor focus:ring-1 border-[#868686]" type="checkbox" name="remember" id="remember" />
                        <label className="ml-[5px] text-base" htmlFor="remember">Remind me</label>
                    </div>
                    <div>
                        <a className="text-primaryColor text-titles text-sm font-semibold cursor-pointer" onClick={handleForgetPassword}>I forgot my password</a>
                    </div>
                </div>
                <button className="h-[51px] bg-primaryColor rounded text-[#473404] font-titles font-semibold" type="submit">Enter</button>
            </form>
        </>
    )
}