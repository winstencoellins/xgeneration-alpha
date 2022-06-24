import React from 'react'

function Alert({message, type}) {
  return (
    <div className={`${type === "success" ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} relative py-3 px-3 rounded-lg mb-4`}>
      {message}
    </div>
  )
}

export default Alert
