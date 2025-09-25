"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (container: string | HTMLElement, params: any) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
      execute: (siteKey: string, options?: { action: string }) => Promise<string>;
    };
  }
}

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  onError?: () => void;
  onExpired?: () => void;
}

const ReCaptcha = ({ onChange, onError, onExpired }: ReCaptchaProps) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error("reCAPTCHA site key not found");
      return;
    }

    // reCAPTCHA スクリプトの読み込み
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit&hl=ja`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.ready(() => {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current!, {
            sitekey: siteKey,
            callback: (token: string) => {
              onChange(token);
            },
            "error-callback": () => {
              onChange(null);
              onError?.();
            },
            "expired-callback": () => {
              onChange(null);
              onExpired?.();
            },
          });
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      // クリーンアップ
      document.head.removeChild(script);
    };
  }, [onChange, onError, onExpired]);

  return (
    <div className="flex justify-center">
      <div ref={recaptchaRef} />
    </div>
  );
};

export default ReCaptcha;