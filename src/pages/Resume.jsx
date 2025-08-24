import { useNavigate } from 'react-router-dom'

const Resume = () => {
  const navigate = useNavigate()

  const experiences = [
    {
      period: "Jan 2024 - Present",
      title: "Founder",
      company: "HDGE3 Labs (hdge3.space)",
      description: "delivering AI-powered automation solutions with agentic AI workforce, reducing manual workflow efforts by 70%"
    },
    {
      period: "Sep 2024 - Oct 2024",
      title: "Intern",
      company: "Thingbits Electronics",
      description: "developed context-aware chatbot with RAG pipelines using NVIDIA AI Workbench"
    }
  ]

  const achievements = [
    "Winner: Live-AI Global Harvard-Duke Hackathon (2024)",
    "2nd Place: GES x UCLA Hackathon (2024)",
    "Ranked #6 Globally on Fetch.AI Agentverse (1.6M+ interactions)"
  ]

  const publications = [
    {
      title: "HepaScope: Densely Connected UNet for Liver & Tumor Segmentation",
      status: "Shortlisted – ICBCB 2025"
    },
    {
      title: "Enhancing Privacy in Digital Marketing: Data Clean Room for CTR Prediction",
      status: "Under Review – IEEE ET&A 2025"
    }
  ]

  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 transition-all"
        >
          Back
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-6">
            <div className="min-w-[10rem] text-gray-400 mb-2 md:mb-0">
              {exp.period}
            </div>
            <div>
              <strong className="text-white">{exp.title}</strong>, {exp.company}
              <p className="text-gray-300 mt-1">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Machine Learning & AI</h3>
            <p className="text-gray-300">RAG (Langchain, NVIDIA Embeddings), LLM Fine-tuning (LoRA, Unsloth), MCP, Ollama.cpp</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Programming</h3>
            <p className="text-gray-300">Python, C++, JavaScript, HTML/CSS</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Computer Vision</h3>
            <p className="text-gray-300">DeepLab v3+, Mask R-CNN, YOLO v9, TinyML</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Cloud & DevOps</h3>
            <p className="text-gray-300">Docker, Azure, Digital Ocean, Cloudflare Tunneling</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Achievements</h2>
        {achievements.map((achievement, index) => (
          <div key={index} className="mb-3">
            <span className="text-white">● {achievement}</span>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-cyan-400">Publications</h2>
        {publications.map((pub, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-white">{pub.title}</h3>
            <p className="text-gray-400">{pub.status}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">Education</h2>
        <div className="flex flex-col md:flex-row">
          <div className="min-w-[10rem] text-gray-400 mb-2 md:mb-0">
            Present
          </div>
          <div>
            <strong className="text-white">University of Mumbai</strong>
            <p className="text-gray-300 mt-1">pursuing degree in computer engineering</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <a 
          href="mailto:taleledevdatta@gmail.com"
          className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all"
        >
          Contact
        </a>
        <a 
          href="https://github.com/devdattatalele"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Resume