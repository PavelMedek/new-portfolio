import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:medek41@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className=" flex flex-col space-y-10">
        <h4 className=" text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className=" decoration-[#f7ab0a]/50 underline">Lets Talk.</span>
        </h4>

        <div className=" space-y-10">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">+123546789</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <MapPinIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">123 Develope Lane</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">medek41@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className=" bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
