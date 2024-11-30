import React from 'react'

function Cards({ data, text }) {
  return (
    <div className="card-container h-full rounded-lg p-2 bg-[#F1F4F8] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <p className="card-text text-lg text-gray-700 text-start">{text}</p>
      <button className="card-button self-end p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
        <img src={data} alt="Icon" className="card-icon w-6 h-6 self-end" />
      </button>
    </div>
  );
}

export default Cards



