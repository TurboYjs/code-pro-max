import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
// import { auth } from "../services/firebaseConfig";
import { Lock, EnvelopeSimple, User, Check, UserPlus, ArrowLeft } from "phosphor-react";
import { Loading } from './Loading';
import {useRouter} from "next/router";

export default function SignOnForm() {
  const router = useRouter()

  function handleReturnLoginPage() {
    router.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const signOn = async () => {

      if (confirmPassword != password) {
        setMessage("Passwords do not check");
        setIsOpen(true);
        return
      }

      try {
          setIsWaiting(true);
          const getUser = await createUserWithEmailAndPassword(auth, email, password);
          console.log(getUser);
          setIsWaiting(false);
          setMessage("You have successfully registered!");
          setIsOpen(true);
          return getUser;
      } catch(error) {
          setIsWaiting(false);
          setIsOpen(true);
          return console.log(error);
      }
  }

  function closeModal() {
      setIsOpen(false);
      setMessage("");
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
                    <UserPlus className="w-7 h-7 text-primaryColor" weight="bold" />
                    Sign up
                </span>
                <span className="font-body font-medium text-base text-textBase flex">
                    Enter the information to register.
                </span>
            </div>
            <div className="flex flex-col gap-[16px]">
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
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            placeholder="Enter your e-mail" />
                    </label>
                </div>
                <div id="password-group">
                <span className="font-titles text-base font-medium">Password</span>
                    <label className="relative block" htmlFor="password">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Lock />
                        </span>
                        <input
                            type="password"
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
                            name="password"
                            id="password"
                            onChange={(event) => {setPassword(event.target.value)}}
                            required
                            placeholder="Enter your password" />
                    </label>
                </div>
                <div id="repeatPassword-group">
                    <label className="relative block" htmlFor="passwordConfirm">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Lock />
                        </span>
                        <input
                            type="password"
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
                            name="passwordConfirm"
                            id="passwordConfirm"
                            onChange={(event) => {setConfirmPassword(event.target.value)}}
                            required
                            placeholder="Confirm your password" />
                    </label>
                </div>
                <div className="flex gap-2">
                    <button className="h-[51px] w-full bg-primaryColor rounded text-[#473404] font-titles font-semibold flex items-center justify-center flex-1" type="submit" onClick={signOn}>{isWaiting ? <Loading /> : "Register"}</button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2"
                  >
                    <Check weight="bold" className="text-green-700" /> Done!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {message}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                        Close!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>
    )
}