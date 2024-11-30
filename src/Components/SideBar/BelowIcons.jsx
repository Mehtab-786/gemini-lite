import React from 'react';

function BelowIcons({ icon, text, siding }) {
  return (
    <button className="below-icons-container flex items-center gap-2 p-2 hover:bg-slate-200 rounded-xl">
      <img src={icon} className="below-icon w-6" alt={`${text} Icon`} />
      {siding && <h1 className="below-icons-text text-sm font-medium">{text}</h1>}
    </button>
  );
}

export default BelowIcons;
