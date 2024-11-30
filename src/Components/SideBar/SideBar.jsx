
import React, { useContext, useState } from 'react';
import menuIcon from '../../assets/menu_icon.png'; // Import the image
import plueIcon from '../../assets/plus_icon.png'; // Import the image
import historyIcon from '../../assets/history_icon.png'; // Import the image
import questionIcon from '../../assets/question_icon.png'; // Import the image
import settingIcon from '../../assets/setting_icon.png'; // Import the image
import messageIcon from '../../assets/message_icon.png'; // Import the image
import BelowIcons from './BelowIcons';
import { AuthContext } from '../../ContextLogic';

function SideBar() {
  const [siding, setSiding] = useState(false);
  const {onSent, newChat, prevPrompt} = useContext(AuthContext)


  const loadData = async (prompt) => {
    await onSent(prompt)
  }

  return (
    <div
      className={`sidebar-container ${
        siding ? 'sm:w-[20%] w-[120%] ' : 'sm:w-[6%] w-[20%]'
      } h-full flex flex-col justify-between bg-[#F1F4F8] py-4 px-2 transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="sidebar-top flex flex-col gap-6">
        {/* Menu Button */}
        <button
          onClick={() => setSiding(!siding)}
          className="menu-button flex justify-center items-center self-start hover:bg-slate-300 rounded-full p-2"
        >
          <img src={menuIcon} className="menu-icon w-6" alt="Menu Icon" />
        </button>
  
        {/* New Chat */}
        <button
          className="new-chat-button flex items-center gap-2 hover:bg-slate-200 p-2 rounded-xl"
          onClick={() => newChat()}
        >
          <img src={plueIcon} className="plus-icon w-5" alt="Plus Icon" />
          {siding && <h1 className="new-chat-text text-sm font-medium">New Chat</h1>}
        </button>
  
        {/* Recent Section */}
        <div className="recent-section">
          {siding && <h2 className="recent-header font-semibold text-sm mb-2">Recent</h2>}
          {prevPrompt.map((search, idx) => (
            <button
              key={idx}
              className="recent-button flex items-center gap-2 hover:bg-slate-200 p-2 rounded-xl max-w-full truncate"
              onClick={() => loadData(search)}
            >
              <img src={messageIcon} className="message-icon w-6" alt="Message Icon" />
              {siding && <h1 className="recent-text text-sm font-medium truncate">{search}</h1>}
            </button>
          ))}
        </div>
      </div>
  
      {/* Bottom Section */}
      <div className="sidebar-bottom flex flex-col gap-3">
        <BelowIcons text="Help" icon={questionIcon} siding={siding} />
        <BelowIcons text="Activity" icon={historyIcon} siding={siding} />
        <BelowIcons text="Settings" icon={settingIcon} siding={siding} />
      </div>
    </div>
  );
  
}

export default SideBar;
