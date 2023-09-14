
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY =  import.meta.env.VITE_OPENAI_API_KEY;
console.log(API_KEY);

const systemMessage = {
  role: "system",
  content:
    "",
};

const predefinedQuestions = [
  "What is ecology?",
  "How can I reduce my car Co2 emissions?",
  "What other alternatives of plastic bags?",
  "What is the best sulotion to stop climate change?",
  "Explain climate change to me",
  "How can we save water at home?",
  "What is the best sulotion to stop climate change?",
  "What can we do to help keep our air clean?",
  "How does planting trees help the environment?"
];

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (question) => {
    const newMessage = {
      message: question,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <>
    <h1 className = 'pt-10 pb-3 text-3xl text-center font-light'>The eco-AI tool:</h1>
    <h1 className = '  pb-3 text-md text-center font-light'>Click on any question to ask the Eco-AI</h1>
    <div className="grid grid-cols-1  gap-10 items-center md:grid md:grid-cols-3 md:gap-10 ">


      <div className = 'col-span-2'>
        
        <MainContainer className="h-[36rem] p-4 border-[#52B69A] border-2 rounded-2xl mx-10 shadow-xl ">
          <ChatContainer >
            <MessageList
            
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              
              {messages.map((message, i) => (
                <Message   key={i} model={message} />
              ))}
            </MessageList>
           
          </ChatContainer>
        </MainContainer>
      </div>

      <div className = 'md:mx-0 sm:flex sm:flex-col sm:justify-between sm:w-screen'> 

        {predefinedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleSend(question)}
            className="bg-[#52B69A] hover:bg-[#99D98C] text-white font-bold py-2 px-4 rounded-full m-2 shadow-lg"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
    </>
  );
}

export default Chatbot;
