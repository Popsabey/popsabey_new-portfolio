import React from "react";

const InputComponents = ({ title, name, type }) => {
  return (
    <div className="w-full relative text-[#C8C9F787] lg:text-[16px] text-[12px]">
      <input
        autoComplete="off"
        id={name}
        name={name}
        placeholder=""
        type={type}
        className={`peer w-full p-4 pt-6 outline-none bg-transparent font-light border-b-2 border-[#C8C9F787] transition disabled:opacity-70 disabled:cursor-not-allowed 
        `}
      />
      <label
        htmlFor="name"
        className={`absolute cursor-text duration-150 transform -translate-y-3 lg:top-4 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-[.9]
        peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-[.6]`}
      >
        {title}
      </label>
    </div>
  );
};

export default InputComponents;
