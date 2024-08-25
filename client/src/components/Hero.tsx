import React, { ChangeEvent, useState } from "react";

interface HeroProps {
  onResponse: React.Dispatch<React.SetStateAction<string>>;
}


const Hero: React.FC<HeroProps> = ({onResponse}) => {

  const [selectedOption, setSelectedOption] = useState<string>('GET')
  const [url, setUrl] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  const handleSend = async () => {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors'
    })
    const responseData = await response.json() 
    const responseString = JSON.stringify(responseData)
    onResponse(responseString)
  }

  return (
    <div className="flex h-[40vh]">
      <div>
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          className="p-2 border rounded-md"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
        </select>{" "}
        <input type="text" placeholder="URL..." value={url} onChange={handleUrlChange}/>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Hero;
