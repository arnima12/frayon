import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mlekavob");
  if (state.succeeded) {
      return <div className="flex justify-center items-center h-[54vh] ">
        <p className="text-4xl text-red-500">Thanks for contacting with us!</p>
      </div>;}
    return (
        <div className="flex flex-col justify-center py-12 items-center gap-8 h-[60vh] mt-12">
            <h1 className="text-3xl">Contact Us</h1>
            <form action="https://formspree.io/f/mlekavob" method="POST" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6 text-xl">
      <div className="flex flex-col gap-4">
      <label htmlFor="username">
        Username
      </label>
      <input className="border-2 w-96"
        id="username"
        type="text" 
        name="username"
      />
      <ValidationError 
        prefix="Username" 
        field="username"
        errors={state.errors}
      />
      </div>
      <div className="flex flex-col gap-4">
      <label htmlFor="email">
        Email Address
      </label>
      <input className="border-2 w-96"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="flex flex-col gap-4">
      <label htmlFor="message">
        Message
      </label>
      <textarea className="border-2 w-96"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div>
      <button className="btn border-yellow-500 text-black hover:bg-yellow-500" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
      </div>
    </form>
        </div>
    );
};

export default Contact;