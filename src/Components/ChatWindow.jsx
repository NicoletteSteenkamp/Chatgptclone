import "./ChatWindow.css"; // Import your CSS file

const ChatWindow = () => {
  return (
    <div className="chat-container">
      <div className="chatbox">
        {/* Search bar inside the chatbox */}
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
        />

        {/* Chat log where messages will appear */}
        <div className="chat-log">
          {/* Chat messages go here */}
          <div className="chat-message-chatgpt">
            <div className="chat-message-center">
              <span className="avatar">🤖</span>
              <p className="message">Hello! How can I help you today?</p>
            </div>
          </div>
        </div>

        {/* Chat input area */}
        <div className="chat-input-holder">
          <textarea
            className="chat-input-textarea"
            placeholder="Type your message here..."
          ></textarea>
          <button type="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
