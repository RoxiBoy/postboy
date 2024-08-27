import React from "react";

interface responseData {

  response: string;

}


const Output: React.FC<responseData> = ({response}) => {

  return (
    <div>
      <pre>{response}</pre>
    </div>
  )
}

export default Output
