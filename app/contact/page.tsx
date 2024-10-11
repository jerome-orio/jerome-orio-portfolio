import { Form } from "./Form";

const Contact = () => {
    return (
        <>
            <div className="hero min-h-screen bg-gradient-to-br from-purple-300 to-indigo-900 lg:-mt-20">
                <div className="hero-overlay bg-opacity-45"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Let’s Connect!</h1>
                        <p className="mb-5">I look forward to discussing potential opportunities. Please feel free to contact me!</p>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;