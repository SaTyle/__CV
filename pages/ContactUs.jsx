import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router'; // Use useRouter from Next.js
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';

// ... other imports

export const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_ybld1ql', 'template_12ehpoz', form.current, 'wkfAjLOzqlmyyJkqU')
      .then((result) => {
        console.log(result.text);
        form.current.reset(); // Reset the form

        const router = useRouter(); // Use useRouter within the handleSubmit function
        router.push('/'); // Redirect to the home page
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      {/* ... rest of your form elements */}
      <div className="flex flex-col w-full">
        <div className="userIcon relative mb-6">
          <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
            <HiUser />
          </div>
          <input type="text" className="input_stylings" placeholder="Name" name="from_name" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="mailIcon relative mb-6">
          <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
            <HiMail />
          </div>
          <input type="email" className="input_stylings" placeholder="Email" name="from_email" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="textIcon relative mb-6">
          <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
            <BsChatTextFill />
          </div>
          <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" name="msg" />
        </div>
      </div>
      <div className="my-4">
  <button onClick={handleSubmit} className="button" type="submit">SEND MESSAGE</button>
</div>
    </form>
  );
};

export default ContactUs;