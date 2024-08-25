import React from "react";

interface responseData {

  response: string;

}


const Output: React.FC<responseData> = ({response}) => {

  return (
    <div>
      {
        response
      } 
    </div>
  )
}

export default Output
