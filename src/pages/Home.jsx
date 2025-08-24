import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-black">
      <div className="mx-auto flex flex-col-reverse md:flex-row">
        <img 
          src="/profile-placeholder.jpg" 
          alt="Devdatta Talele" 
          className="h-screen w-full object-cover md:opacity-80 transition-all hover:opacity-100 hover:grayscale-0 md:w-1/2 md:grayscale"
        />
        <div className="flex w-full max-w-[40rem] flex-col justify-center p-8 md:opacity-80 transition-all hover:opacity-100 hover:grayscale-0 md:w-1/2 md:grayscale">
          <h1 className="text-4xl font-bold">
            This is <span className="text-red-400">Devdatta</span>.
          </h1>
          <p className="mt-4">
            Coming from Mumbai, Devdatta Talele is an{' '}
            <a 
              href="https://github.com/devdattatalele" 
              target="_blank" 
              rel="noreferrer" 
              className="text-green-400 hover:bg-green-400 hover:text-white transition-all"
            >
              AI engineer
            </a>{' '}
            with hands-on experience in{' '}
            <a 
              href="https://hdge3.space" 
              target="_blank" 
              rel="noreferrer" 
              className="text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              LLM development
            </a>
            , RAG architectures, and{' '}
            <a 
              href="#" 
              className="text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all"
            >
              CRM automation
            </a>
            . Having founded{' '}
            <strong>HDGE3 Labs</strong>, Devdatta focuses on building{' '}
            <strong className="gradient">scalable AI solutions</strong>{' '}
            for workflow automation and customer support.
            <br /><br />
            Devdatta has extensive experience with{' '}
            <a 
              href="#" 
              className="text-indigo-400 hover:bg-indigo-400 hover:text-white transition-all"
            >
              RAG architectures
            </a>
            , LLM fine-tuning with{' '}
            <a 
              href="#" 
              className="text-purple-400 hover:bg-purple-400 hover:text-white transition-all"
            >
              LoRA optimization
            </a>
            , and the{' '}
            <a 
              href="#" 
              className="text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all"
            >
              Model Context Protocol (MCP)
            </a>
            . He's ranked{' '}
            <strong>#6 globally</strong> in Fetch.AI's healthcare analytics with 1.6M+ interactions.
            <br /><br />
            He's currently{' '}
            <a 
              href="#" 
              className="text-rose-400 hover:bg-rose-400 hover:text-white transition-all"
            >
              building
            </a>
            ,{' '}
            <a 
              href="#" 
              className="text-orange-400 hover:bg-orange-400 hover:text-white transition-all"
            >
              innovating
            </a>
            ,{' '}
            <a 
              href="#" 
              className="text-pink-400 hover:bg-pink-400 hover:text-white transition-all"
            >
              automating
            </a>
            , and looking for the{' '}
            <strong>next breakthrough</strong>. If you meet him at a conference, 
            he'll be happy to discuss AI ethics, model optimization, or the latest 
            in agentic systems.
            
            <div className="mt-4 flex gap-4">
              <button 
                onClick={() => navigate('/resume')}
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all"
              >
                Resume
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all"
              >
                Projects
              </button>
              <a 
                href="https://cal.com/devdattatalele" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all"
              >
                Book a Call
              </a>
            </div>
            <div className="mt-4 flex gap-4 flex-wrap">
              <a 
                href="https://x.com/devdattatalele" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs opacity-50 hover:opacity-100 transition-all"
              >
                X (Twitter)
              </a>
              <a 
                href="https://linkedin.com/in/devdattatalele" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs opacity-50 hover:opacity-100 transition-all"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/devdattatalele" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs opacity-50 hover:opacity-100 transition-all"
              >
                GitHub (94+ ⭐)
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home