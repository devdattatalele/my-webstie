import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
    {
      title: "Krya.ai",
      period: "2025",
      description: "⭐ 6 stars - Intelligent local automation tool using LLMs for code generation and UI interaction. Features automated code generation, error handling, and continuous learning with feedback loops.",
      tech: "Python 3.8+, Google Gemini AI, PyAutoGUI, Streamlit, Pyperclip",
      link: "https://github.com/devdattatalele/Krya.ai",
      color: "text-green-400 hover:bg-green-400",
      category: "AI/ML Automation"
    },
    {
      title: "GitHub Issue Resolution MCP Server",
      period: "2025",
      description: "⭐ 1 star - Comprehensive AI system for automated GitHub repository analysis and issue resolution. Dual-MCP server architecture with RAG-based approach for intelligent patch generation.",
      tech: "Python 3.8+, Google Gemini 2.5-Flash, LangChain, ChromaDB, Docker, GitHub API",
      link: "https://github.com/devdattatalele/git-summary",
      color: "text-blue-400 hover:bg-blue-400",
      category: "Developer Tools/AI"
    },
    {
      title: "VFORUM",
      period: "2025",
      description: "⭐ 3 stars - University community platform for VIT students. Features real-time Q&A system, tech event discovery with RSVP, and VIT-exclusive authentication.",
      tech: "Next.js 14, React, TypeScript, Tailwind CSS, Firebase, Shadcn/ui",
      link: "https://github.com/devdattatalele/VFORUM",
      demo: "https://vforum.devdattatalele.me",
      color: "text-purple-400 hover:bg-purple-400",
      category: "Web Application"
    },
    {
      title: "VaxInsight Healthcare Analytics",
      period: "2025",
      description: "⭐ 2 stars - Ranked #6 Globally on Fetch.AI Agentverse with 1.6M+ interactions. AI-powered healthcare analytics using decentralized agents for patient journey analysis.",
      tech: "Python, Fetch.AI, uAgents Framework, Blockchain",
      link: "https://github.com/devdattatalele/VaxInsight-AI-Powered-Healthcare-Journey-Analytics",
      color: "text-cyan-400 hover:bg-cyan-400",
      category: "AI/ML Healthcare"
    },
    {
      title: "Frappe Helpdesk",
      period: "2024-2025",
      description: "100% open-source ticket management system. Features dual portals, customizable SLAs, automated assignment, and knowledge base management with modern UI/UX.",
      tech: "Frappe Framework, Python, Vue.js, JavaScript, Docker",
      link: "https://github.com/devdattatalele/helpdesk",
      demo: "https://frappe.io/helpdesk",
      color: "text-yellow-400 hover:bg-yellow-400",
      category: "Enterprise Software"
    },
    {
      title: "Self-Driving Car Demo",
      period: "2024",
      description: "Neural network-powered self-driving car demonstration on Raspberry Pi. Features pre-trained models, GPIO motor control, and camera module integration.",
      tech: "Python, Neural Networks, Raspberry Pi, OpenCV, GPIO",
      link: "https://github.com/devdattatalele/Self-Driving-Car-Demo",
      color: "text-rose-400 hover:bg-rose-400",
      category: "AI/ML IoT"
    },
    {
      title: "HDGE3 Labs: AI-Powered CRM Platform",
      period: "2024 - Present",
      description: "Delivering agentic AI workforce for CRM automation. Features include surveys, campaign builders, lead management, and automated customer support with 70% workflow reduction.",
      tech: "Langchain, Unsloth, Ollama, Docker, Azure",
      link: "https://hdge3.space",
      color: "text-indigo-400 hover:bg-indigo-400",
      category: "AI/ML Enterprise"
    },
    {
      title: "HepaScope: Medical Image Segmentation",
      period: "2024",
      description: "Densely Connected UNet for liver and tumor segmentation. Research paper shortlisted for ICBCB 2025 conference with novel deep learning architecture.",
      tech: "Python, PyTorch, Computer Vision, Medical Imaging",
      link: "#",
      color: "text-pink-400 hover:bg-pink-400",
      category: "AI/ML Research"
    }
  ]

  return (
    <div className="p-8 md:p-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <button 
          onClick={() => navigate('/')}
          className="text-blue-400 hover:text-blue-300 transition-all"
        >
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-800 p-6 hover:border-gray-600 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-white group-hover:text-gray-200">
                {project.title}
              </h2>
              <span className="text-gray-500 text-sm">{project.period}</span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-4">
              <span className="text-sm text-gray-400">Technologies: </span>
              <span className="text-sm text-gray-300">{project.tech}</span>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 border transition-all ${project.color} hover:text-black text-sm`}
              >
                View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-black transition-all text-sm"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
        <p className="text-gray-400 mb-6">
          Check out my GitHub for 63+ repositories including strategic forks and contributions to AI/ML frameworks.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/devdattatalele"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all"
          >
            GitHub (94+ ⭐)
          </a>
          <a
            href="https://x.com/devdattatalele"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all"
          >
            Follow on X
          </a>
          <a
            href="https://cal.com/devdattatalele"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all"
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects