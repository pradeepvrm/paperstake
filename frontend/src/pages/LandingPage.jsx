export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 text-white">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">PaperStake</div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-gray-700 rounded-sm px-5 py-2" onClick={() => window.location.href = 'login'}>Login</button>
              <button className="bg-purple-600 hover:bg-gray-700 rounded-sm px-5 py-2" onClick={() => window.location.href = 'register'}>Register</button>
              <a href="https://github.com/pradeepvrm/paperstake" target="_blank">😸
              </a>
            </div>
          </nav>
        </header>
  
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-5xl font-extrabold">Welcome to PaperStake</h1>
          <p className="mb-8 text-xl">Experience the fun and thrill of gambling with no risks involved!</p>
          <div className="flex justify-center space-x-4">
            <button size="lg" className="bg-purple-600 hover:bg-gray-700 rounded-sm px-5 py-2" onClick={() => window.location.href = '/home'}>
              Get Started
            </button>
            <button size="lg" className="bg-purple-600 hover:bg-gray-700 rounded-sm px-5 py-2" onClick={() => window.location.href = '/leaderboard'}>
              Leaderboard
            </button>
          </div>
        </main>
  
        <footer className="absolute bottom-0 w-full py-4 text-center text-sm">
          <p>&copy; 2025 PaperStake. All rights reserved.</p>
        </footer>
      </div>
    )
  }