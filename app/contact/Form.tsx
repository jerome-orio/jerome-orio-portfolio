'use client';
import { useFormState, useFormStatus } from "react-dom";
import { SendEmail } from "./action";
import { useRef } from "react";
import toast from "react-hot-toast";

const initialState = {
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button aria-disabled={pending} disabled={pending} type="submit" className="btn btn-primary disabled:cursor-not-allowed">
            {pending ? <>Sending <span className="loading loading-dots loading-sm"></span></> :
                <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                    </svg>
                </>
            }
        </button>
    );
}

export function Form() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(SendEmail, initialState);

    if (state.message === 'success') {
        formRef.current?.reset();
        toast.custom(<>
            <div role="alert" className="alert alert-success w-fit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Message sent successfully.</span>
            </div></>
        );
    } else if (state.message === 'failed') {
        toast.custom(<>
            <div role="alert" className="alert alert-error w-fit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Failed to send message.</span>
            </div></>
        );
    }

    return (
        <>
            <form ref={formRef} action={formAction}>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="input input-bordered input-primary flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" id="name" name="name" className="grow" placeholder="Name" required />
                    </label>
                    <label htmlFor="email" className="input input-bordered input-primary flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" id="email" name="email" className="grow" placeholder="Email" required />
                    </label>
                    <textarea name="message" className="textarea textarea-bordered textarea-primary textarea-lg flex" placeholder="Message" required></textarea>
                    <SubmitButton />
                </div>
            </form>
        </>
    );
}