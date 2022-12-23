import { memo } from "react"

function Klacht({
  toilet, complaint, email
}){
  console.log(toilet);
  console.log("hello");
  return(
    <tr>
      <td>{toilet}</td>
      <td>{complaint}</td>
      <td>{email}</td>
    </tr>
  )
}

export default memo(Klacht);