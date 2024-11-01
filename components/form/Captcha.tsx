/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';
import Image from 'next/image';
import { generateCaptcha } from '@/lib/captcha';

const Captcha = ({ register, error, setValue, watch }: {
  register: any;
  error?: string;
  setValue: any;
  watch: any;
}) => {
  const [captchaData, setCaptchaData] = useState({ text: '', svg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const refreshTrigger = watch('captchaRefresh');

  const refreshCaptcha = async () => {
    setIsLoading(true);
    const newCaptcha = await generateCaptcha();
    if (newCaptcha) {
      setCaptchaData(newCaptcha);
      setValue('captcha', '');
      setValue('captchaToken', newCaptcha.text);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refreshCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshTrigger]);

  return (
    <div className="space-y-2">
      <div className="relative bg-base-200 rounded-lg overflow-hidden w-fit">
        {captchaData.svg && (
          <Image
            src={captchaData.svg}
            alt="CAPTCHA verification"
            className="w-[200px] h-auto"
            width={200}
            height={60}
          />
        )}
        <button
          type="button"
          className="btn btn-ghost btn-sm absolute top-1 right-1"
          onClick={() => setValue('captchaRefresh', Date.now())}
          disabled={isLoading}
          aria-label="Refresh CAPTCHA"
        >
          <LuRefreshCcw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <label htmlFor="captcha" className="input input-bordered input-primary flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-primary flex-shrink-0">
          <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68l-.244-.289C3.26 7.825 2.5 6.705 2.5 5.25 2.5 2.313 4.863 0 8 0s5.5 2.313 5.5 5.25c0 1.454-.76 2.574-1.352 3.3l-.244.29c-.191.225-.384.478-.542.679-.208.3-.33.565-.37.847a.75.75 0 0 1-1.485-.21c.085-.595.337-1.08.621-1.49.203-.293.45-.585.673-.849l.214-.253c.56-.679.984-1.32.984-2.304 0-2.06-1.637-3.75-4-3.75ZM6 15.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
        </svg>
        <input
          id="captcha"
          type="text"
          className="grow text-base-content text-base"
          placeholder="Enter CAPTCHA text"
          {...register('captcha')}
        />
      </label>
      {error && <div className="text-error text-sm">{error}</div>}
      <input
        id="captchaToken"
        type="hidden"
        {...register('captchaToken')}
        value={captchaData.text}
      />
      <input
        id="captchaRefresh"
        type="hidden"
        {...register('captchaRefresh')}
      />
    </div>
  );
};

export default Captcha;