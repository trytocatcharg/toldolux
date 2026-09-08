"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^\+?[0-9][0-9\s.-]{6,17}$/;

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Carrer%20Rumania%2022%2C%2043882%20Segur%20de%20Calafell%2C%20Tarragona&output=embed";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "sending" | "sent";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  privacy: false,
};

export function Contact() {
  const { t, locale } = useI18n();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const privacyHref = `/${locale}/politica-de-privacidad`;

  const validate = (v: FormValues): FormErrors => {
    const next: FormErrors = {};

    if (!v.name.trim()) {
      next.name = t("contact.validation.required") as string;
    } else if (v.name.trim().length < 2) {
      next.name = t("contact.validation.minLength") as string;
    }

    if (!v.email.trim()) {
      next.email = t("contact.validation.required") as string;
    } else if (!EMAIL_REGEX.test(v.email.trim())) {
      next.email = t("contact.validation.email") as string;
    }

    if (!v.phone.trim()) {
      next.phone = t("contact.validation.required") as string;
    } else if (!PHONE_REGEX.test(v.phone.trim())) {
      next.phone = t("contact.validation.phone") as string;
    }

    if (!v.message.trim()) {
      next.message = t("contact.validation.required") as string;
    } else if (v.message.trim().length < 10) {
      next.message = t("contact.validation.minLength") as string;
    }

    if (!v.privacy) {
      next.privacy = t("contact.validation.privacy") as string;
    }

    return next;
  };

  const handleChange = (field: keyof FormValues, value: string | boolean) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }));
    }
  };

  const handleBlur = (field: keyof FormValues) => {
    const fieldError = validate(values)[field];
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("sending");
    // TODO: replace with a real delivery channel (API route + email provider).
    // Simulated send until the backend is implemented.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  };

  const inputClass = (field: keyof FormValues) =>
    cn(
      "w-full rounded-lg border bg-white px-4 py-3 text-primary-900 shadow-sm transition placeholder:text-primary-400 focus:outline-none focus:ring-2",
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "border-transparent focus:ring-primary-900",
    );

  const errorClass =
    "mt-2 flex items-center gap-1 text-sm font-medium text-red-900";

  return (
    <section id="contact" className="bg-white py-20 dark:bg-primary-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
              {t("contact.title") as string}
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-600 dark:text-primary-200">
              {t("contact.subtitle") as string}
            </p>
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-primary-200 dark:ring-primary-700">
              <iframe
                title={t("contact.mapTitle") as string}
                src={MAP_EMBED_URL}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-80 w-full border-0"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-accent-500 p-6 shadow-xl sm:p-10">
            {status === "sent" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="mb-4 h-14 w-14 text-white" />
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {t("contact.form.successTitle") as string}
                </h3>
                <p className="mb-8 max-w-sm text-white/90">
                  {t("contact.form.successMessage") as string}
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-500 active:scale-95"
                >
                  {t("contact.form.sendAnother") as string}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label htmlFor="contact-name" className="sr-only">
                    {t("contact.form.name") as string}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder={t("contact.form.name") as string}
                    value={values.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className={errorClass}
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="contact-email" className="sr-only">
                    {t("contact.form.email") as string}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("contact.form.email") as string}
                    value={values.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className={errorClass}
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="contact-phone" className="sr-only">
                    {t("contact.form.phone") as string}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={t("contact.form.phone") as string}
                    value={values.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      className={errorClass}
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="contact-message" className="sr-only">
                    {t("contact.form.message") as string}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder={t("contact.form.message") as string}
                    value={values.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className={cn(inputClass("message"), "resize-y")}
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className={errorClass}
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <input
                      id="contact-privacy"
                      type="checkbox"
                      checked={values.privacy}
                      onChange={(e) =>
                        handleChange("privacy", e.target.checked)
                      }
                      aria-invalid={Boolean(errors.privacy)}
                      aria-describedby={
                        errors.privacy ? "contact-privacy-error" : undefined
                      }
                      className="mt-1 h-4 w-4 shrink-0 rounded accent-white"
                    />
                    <label
                      htmlFor="contact-privacy"
                      className="text-sm font-medium text-white"
                    >
                      {t("contact.form.privacy") as string}{" "}
                      <a
                        href={privacyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white/80"
                      >
                        {t("contact.form.privacyLink") as string}
                      </a>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p
                      id="contact-privacy-error"
                      className={errorClass}
                      role="alert"
                    >
                      {errors.privacy}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:ring-offset-2 focus:ring-offset-accent-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending"
                    ? (t("contact.form.sending") as string)
                    : (t("contact.form.submit") as string)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
