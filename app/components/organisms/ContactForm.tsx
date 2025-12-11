'use client';

import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("xwpgqqak");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-lg font-medium mt-4">
        Thanks for reaching out! 🚀
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-3xl">
      <ul className="reset grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Full Name */}
        <li className="sm:col-span-1">
          <label htmlFor='fullname' className="block mb-2 text-sm font-medium text-(--text)">Full Name *</label>
          <input
            id="fullname"
            name="fullName"
            required
            autoComplete="name"
            className="w-full p-3 rounded-xl bg-(--btn-bg) border border-(--border) 
            text-(--text) placeholder:text-neutral-500
            focus:border-(--primar-color) focus:ring-1 focus:ring-site-primary 
            outline-none transition-all"
          />
          <ValidationError prefix="Name" field="fullName" errors={state.errors} />
        </li>

        {/* Email */}
        <li className="sm:col-span-1">
          <label htmlFor='email' className="block mb-2 text-sm font-medium text-(--text)">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full p-3 rounded-xl bg-(--btn-bg) border border-(--border) 
            text-(--text) placeholder:text-neutral-500
            focus:border-(--primar-color) focus:ring-1 focus:ring-site-primary 
            outline-none transition-all"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </li>

        {/* Message */}
        <li className="sm:col-span-2">
          <label htmlFor='message' className="block mb-2 text-sm font-medium text-(--text)">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            autoComplete="message"
            className="w-full h-40 p-3 rounded-xl bg-(--btn-bg) border border-(--border) 
            text-(--text) placeholder:text-neutral-500
            focus:border-(--primar-color) focus:ring-1 focus:ring-site-primary 
            outline-none transition-all resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </li>

        {/* Submit button */}
        <li className="sm:col-span-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="btn w-full sm:w-auto px-6 py-3 rounded-xl bg-site-primary text-black 
            font-semibold hover:bg-site-primary/90 active:scale-95 transition-all 
            disabled:opacity-50 disabled:cursor-not-allowed justify-center"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </li>

      </ul>
    </form>
  );
}
