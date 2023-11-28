import { ArrowLeft, EnvelopeSimple, Password } from "phosphor-react";
import {useRouter} from "next/router";
export default function ForgetPasswordForm() {
    const router = useRouter()

    function handleReturnLoginPage() {
        router.push("/");
    }

    return(
        <>
            <div className="mb-[27px] flex-col gap-1">
                <button className="text-textTitle font-titles font-semibold flex gap-3 items-center" onClick={handleReturnLoginPage}>
                    <ArrowLeft className="w-5 h-5 text-textBase" weight="bold" />
                    Back
                </button>
            </div>
            <div className="mb-[27px] flex flex-col gap-1">
                <span className="text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3 items-center">
                    <Password className="w-7 h-7 text-primaryColor" weight="bold" />
                    Recover password
                </span>
            </div>
            <form className="flex flex-col gap-[16px]">
                <div id="email-group">
                    <span className="font-titles text-base font-medium">E-mail</span>
                    <label className="relative block" htmlFor="email">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <EnvelopeSimple />
                        </span>
                        <input
                            type="email"
                            className="h-[44px]
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
                                focus:invalid:border-[#F33D3D]"
                            name="email"
                            id="email"
                            required
                            placeholder="Enter your e-mail" />
                    </label>
                </div>
                <div className="flex gap-2">
                    <button className="h-[51px] w-full bg-primaryColor rounded text-[#473404] font-titles font-semibold" type="submit">Recover</button>
                </div>
            </form>
        </>
    )
}