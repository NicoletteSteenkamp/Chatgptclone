import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTrashAlt, faVolumeUp } from '@fortawesome/free-solid-svg-icons'; // Import your icons

const SearchBar = ({ updateResults, currentResults, chatHistory, setChatHistory }) => {
  const [value, setValue] = useState("");

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({ message: value }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://localhost:3000/completions", options);
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0].message || !data.choices[0].message.content) {
        throw new Error("Invalid response data structure");
      }

      updateResults(value, data.choices[0].message.content);
      setValue(""); // Clear the input field after getting the message
    } catch (error) {
      console.error(error);
    }
  };

  const renderInputField = () => (
    <input
      className="textarea"
      type="text"
      placeholder="Write Coding about new HTML Tags"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );

  return (
    <>
      {!chatHistory || currentResults ? (
        <div className="search-bar">
          {!currentResults ? (
            renderInputField()
          ) : (
            <input
              disabled
              className="textarea"
              value="Write Coding about new HTML Tags"
              placeholder="Please select if the answer is correct or incorrect?"
            />
          )}
          <span className="navigation-icon" onClick={getMessages}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
      ) : (
        <>
          <div className="chat-suggestion-box">
            <p className="chat-title">Chat Suggestions</p>
            <div className="chat-btns-container">
              <button className="chat-suggestion-btns" onClick={() => setChatHistory([])}>
                Write JS code for it
              </button>
              <button className="chat-suggestion-btns">Explain more</button>
              <span className="delete-icon">
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
            </div>
          </div>
          <div className="search-bar-big">
            {renderInputField()}
            <span className="navigation-icon-big">
              <FontAwesomeIcon icon={faVolumeUp} />
              <div onClick={getMessages}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default SearchBar;
