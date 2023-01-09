import React, { useState, useEffect } from "react"
import io from "socket.io-client"

function Dashboard() {
  const [uploadProgress, setUploadProgress] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:3000/api")
    socket.on("uploadProgress", (data) => {
      setUploadProgress(data)
    })
  }, [])

  return <div> A{uploadProgress ? uploadProgress : null}</div>
}