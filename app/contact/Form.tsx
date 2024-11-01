'use client';

import toast from "react-hot-toast";
import { submitEmailForm } from '@/lib/email';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "@/components/form/FormError";
import { contactFormSchema } from "@/app/schema/formSchema";
import { ContactFormFields } from '@/app/types/formTypes';
import Captcha from '@/components/form/Captcha';
import Alert from '@/components/common/Alert';

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      captchaRefresh: Date.now()
    }
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    const result = await submitEmailForm(data);

    if (result?.message === 'success') {
      toast.custom(
        <Alert type={"success"} message={"Message sent successfully."} />
      );
      reset();
      setValue('captchaRefresh', Date.now());
    } else {
      // Uncomment to set a global error message
      // setError("root", { message: "Something went wrong. Please try again." });
      toast.custom(
        <Alert type={"error"} message={"Failed to send message. Please try again."} />
      );
    }

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        {/* Name Input */}
        <label htmlFor="name" className="input input-bordered input-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-primary flex-shrink-0">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input {...register('name')} type="text" id="name" className="grow text-base-content text-base" placeholder="Name" />
        </label>
        {errors.name?.message && <FormError message={errors.name?.message} />}

        {/* Email Input */}
        <label htmlFor="email" className="input input-bordered input-primary flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-primary flex-shrink-0">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input {...register('email')} type="email" id="email" className="grow text-base-content text-base" placeholder="Email" />
        </label>
        {errors.email?.message && <FormError message={errors.email?.message} />}

        {/* Message Textarea */}
        <textarea {...register('message')} id="message" className="textarea textarea-bordered textarea-primary text-base flex text-base-content" placeholder="Message"></textarea>
        {errors.message?.message && <FormError message={errors.message?.message} />}

        {/* Captcha Component */}
        <Captcha register={register} error={errors.captcha?.message} setValue={setValue} watch={watch} />


        {/* Submit Button */}
        <button
          aria-disabled={isSubmitting}
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary disabled:cursor-not-allowed"
          aria-label={isSubmitting ? "Sending message" : "Send message"}
        >
          {isSubmitting ? (
            <>Sending <span className="loading loading-dots loading-sm"></span></>
          ) : (
            <>Send Message
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
              </svg>
            </>
          )}
        </button>

        {errors.root?.message && <FormError message={errors.root?.message} />}
      </div>
    </form>
  );
}
