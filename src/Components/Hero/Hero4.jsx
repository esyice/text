import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


function Hero4() {

  const [text , setText] = useState('')
  const [code , setCode] = useState('')
  const [showCode , setShowCode] = useState(false)
  const [dbCode , setDbCode] = useState('')
  const textAreaRef = useRef(null);


  // const refText = useRef(null)
  
  // const handeGenrateCode = () => {
  //   const currentValue = refText.current.value;  // Get the updated value from refText
  //   // console.log(currentValue);  // Print the updated value
  //   setText(currentValue);
  //   console.log(text);  // Print the updated value

  // };

  const generateCode = (length = 6) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code
  };


  useEffect(() => {
    const newcode = generateCode()
    setCode(newcode)
  }, [])

  const handelshareClick = () => {

    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    sendApiCall()
    // console.log(code)

  };

  const sendApiCall = () => {
    axios
      .post('/api/share', {
        text: text,
        code: code,
      })
      .then((response) => {
        // console.log('Response:', response.data);
        setShowCode(true); // Indicate that the code has been shared
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handelGetText = () =>{
    axios.post('/api/getText', {
      code: dbCode,
   })
   .then((res)=>{
    const extractedText = res.data.data.text; // Extracting the text from response
    setText(extractedText); // Set the extracted text in state
    // console.log("Extracted Text:", extractedText);
   })
   .catch((error)=>{
     console.log(`Error: ${error}`)
   })
  }

  const handleReload = () => {
    window.location.reload();
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 100);
  };

  


  
  return (
    <section id="tool" className="py-20 bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Text Sharing Tool
          </h2>
          <p className="text-gray-300 text-lg">
            Convert your text to a shareable code or retrieve shared text
          </p>
        </div>
  
        <div className="space-y-8">
          <div className="bg-gray-700 p-6 rounded-xl shadow-sm animate__animated animate__fadeInUp">
            <div className={`${showCode ? "flex" : "hidden"} flex shadow rounded-lg overflow-hidden bg-amber-50 w-2xs mb-4`}>
              <input className="outline-none w-full py-1 px-3" type="text" value={code}  readOnly />
              <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" >Copy</button>
            </div>
            <label
              htmlFor="inputText"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter Text
            </label>
            <textarea
              id="inputText"
              rows="6"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-[#007bff] focus:border-[#007bff] transition-colors duration-200"
              placeholder="Type or paste your text here..."
              // ref={refText}
              onChange={(event)=> setText(event.target.value)}
              // Set readOnly to true if dbCode is not empty (i.e., user has entered a code).
              // !!dbCode.trim() ensures that any non-empty string becomes true, making the textarea read-only.
              readOnly={!!dbCode.trim()}
              value={text}

            ></textarea>    
            <div className="mt-4 flex justify-evenly">
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                onClick={handleReload}
              >
                Get or Share New Text
              </button>
              <button
                id="generateBtn"
                className="px-6 py-2 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-300 flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed" 
                onClick={handelshareClick}
                disabled={!text?.trim()}
              >
                <span>Generate & Share</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="my-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-800 text-gray-400">OR</span>
            </div>
          </div>
  
          <div className="bg-gray-700 p-6 rounded-xl shadow-sm animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="codeInput"
                className="block text-sm font-medium text-gray-300"
              >
                Enter Code
              </label>
              <button
                id="retrieveBtn"
                className="px-4 py-1.5 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors duration-300 text-sm flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed" 
                onClick={handelGetText}
                disabled={!dbCode.trim()}
              >
                <span>Retrieve Text</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              id="codeInput"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 focus:ring-2 focus:ring-[#007bff] focus:border-[#007bff] transition-colors duration-200"
              placeholder="Enter your code here..."
              onChange={(e)=>setDbCode(e.target.value)}
              // Set readOnly to true if text is not empty (i.e., user has entered text).
              // !!text.trim() ensures that any non-empty string becomes true, making the code read-only.
              readOnly={!!text?.trim()}
            />
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default Hero4;
