import React, { useContext } from 'react'
import userIcon from '../../assets/user_icon.png'
import bulbIcon from '../../assets/bulb_icon.png'
import compassIcon from '../../assets/compass_icon.png'
import messageIcon from '../../assets/message_icon.png'
import codeIcon from '../../assets/code_icon.png'
import micIcon from '../../assets/mic_icon.png'
import sendIcon from '../../assets/send_icon.png'
import galleryIcon from '../../assets/gallery_icon.png'
import geminiIcon from '../../assets/gemini_icon.png'
import Cards from './Cards'
import { AuthContext } from '../../ContextLogic'

function MainPanel() {

  const { prevPrompt, onSent,recentPrompt, loading,resultData, input, setInput} = useContext(AuthContext)
  
  if (prevPrompt.length > 5) {
    prevPrompt.pop()
  }
  
  return (
    <div className="main-container w-full h-full p-2 bg-[#FEFFFE] flex flex-col justify-between items-center py-4 px-5">
  
      {/* Header */}
      <div className="main-header w-full flex justify-between items-center">
        <h1 className="app-title font-semibold text-xl">Gemini</h1>
        <img src={userIcon} className="user-icon w-8 rounded-md" alt="User icon" />
      </div>
  
      {/* Main Content */}
      {!loading ? (
        <div className="main-content w-[80%] sm:w-[60%] text-center mx-auto transition-all duration-300 ease-in-out">
          <div className="greeting-section mb-28">
            <h1 className="greeting-main text-4xl font-semibold bg-gradient-to-r from-blue-600 to-red-500 text-transparent bg-clip-text">
              Hello, User
            </h1>
            <h1 className="greeting-sub text-4xl font-semibold text-gray-400">
              How can I help you today?
            </h1>
          </div>
  
          {/* Cards Section */}
          <div className="cards-container h-[55%] w-full flex gap-3 justify-center items-center">
            <Cards
              data={compassIcon}
              text="Suggest beautiful places to see on an upcoming road trip"
            />
            <Cards
              data={bulbIcon}
              text="Briefly summarize this concept urban planning"
            />
            <Cards
              data={messageIcon}
              text="Brainstorm team bonding activities for our work retreat"
            />
            <Cards
              data={codeIcon}
              text="Improve the readability of the following code"
            />
          </div>
        </div>
      ) : (
        <div className="loading-container w-[100%] sm:w-[60%] mx-auto p-4 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in">
          {/* User Prompt Section */}
          <div className="user-prompt flex items-center gap-4 mb-4">
            <img
              src={userIcon}
              className="user-icon-loading w-10 h-10 rounded-full border-2 border-gray-200"
              alt="User icon"
            />
            <p className="prompt-text text-lg font-medium text-gray-800 break-words">
              {recentPrompt || "Loading..."}
            </p>
          </div>
  
          {/* Result Section */}
          <div className="response-section bg-gray-50 p-4 scrolling max-h-96 overflow-y-auto rounded-md border border-gray-200 flex items-start gap-4">
            <img
              src={geminiIcon}
              alt="Gemini icon"
              className="gemini-icon w-8 h-8"
            />
            {!loading ? (
              <p className="response-loading text-sm text-gray-500 italic">
                Fetching response...
              </p>
            ) : (
              <p className="response-text text-base text-gray-600 leading-6">
                {resultData || "No response yet."}
              </p>
            )}
          </div>
        </div>
      )}
  
      {/* Input Section */}
      <div className="input-section rounded-2xl px-4 py-4 w-[60%] bg-[#F1F4F8] mb-5 flex items-center gap-4 shadow-md">
        <input
          type="text"
          className="input-field bg-transparent border-none outline-none w-full text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-300 rounded-md"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search Gemini"
        />
  
        <div className="input-icons flex gap-4 items-center">
          <img
            className="mic-icon w-6 cursor-pointer hover:opacity-80 transition-opacity"
            src={micIcon}
            alt="Mic Icon"
          />
          <img
            className="gallery-icon w-6 cursor-pointer hover:opacity-80 transition-opacity"
            src={galleryIcon}
            alt="Gallery Icon"
          />
          <button
            onClick={() => onSent(input)}
            className="send-button p-1 hover:bg-blue-600 text-white rounded-full flex justify-center items-center shadow-md transition-all"
          >
              <img className="send-icon w-20 sm:w-10" src={sendIcon} alt="Send Icon" />
          </button>
        </div>
      </div>
    </div>
  );
  }


export default MainPanel
