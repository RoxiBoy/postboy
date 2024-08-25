import {FC} from "react"

type requestProps = {
  requestName: string
}


const Request: FC<requestProps> = ({requestName}) => {
  return (
    <div className="">
        <p className="font-bold text-lg">{requestName}</p>
    </div>
  )
}

export default Request
