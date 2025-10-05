import { useEffect } from 'react'

const Resume = () => {
  useEffect(() => {
    // Replace this with your actual Google Drive share link
    window.location.href = "https://drive.google.com/file/d/19Pgu9O68A2LXAOX4qi39OvQPUaf16hxH/view?usp=sharing"
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <p>Redirecting to resume...</p>
    </div>
  )
}

export default Resume
