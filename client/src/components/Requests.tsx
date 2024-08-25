import { useState } from "react";
import Request from "./Request";

const Requests = () => {
  const [newReqName, setNewReqName] = useState<string>("");
  const [requests, setRequests] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReqName(e.target.value);
  };

  const handleCreate = () => {
    if(newReqName){
      setRequests([...requests, newReqName])
      setNewReqName('') 
    }
  };

  const handleDelete = (request: string) => {
    const newRequests = requests.filter((r) => r!== request)
    setRequests(newRequests)
  }

  return (
    <div className="w-72 bg-lime-50 p-0  h-[90vh] flex flex-col">
      <div className="flex flex-row justify-around items-center py-2 bg-lime-200">
        <p className="font-light text-sm">Requests</p>
     </div>
      <div className="flex flex-col p-4 ">
        {requests.map((request, idx) => {
          return (
            <div key={idx} className="flex flex-row justify-between items-center cursor-pointer px-4 py-4 rounded-lg hover:bg-lime-100">
              <Request requestName={request} />
              <button onClick={() => handleDelete(request)} className="hover:bg-lime-400 px-4 rounded-lg">D</button>
            </div>
          )
        })}

        <div className="flex mt-4 justify-around items-center">
          <input
            type="text"
            className="p-2 border rounded-md mb-2 w-fit"
            value={newReqName}
            onChange={handleInputChange}
            placeholder="Request Name"
          />
          <button onClick={handleCreate} className="cursor-pointer hover:bg-lime-400 px-4 rounded-lg">
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;
