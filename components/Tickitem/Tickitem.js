import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Tickitem = ({ children }) => {
  return (
    <div className="flex gap-3 mb-12">
      <div className="text-3xl text-green-500 flex justify-center items-center">
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div>{children}</div>
    </div>
  )
}
