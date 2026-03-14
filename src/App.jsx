import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="flex items-center justify-center min-h-[60vh] text-gray-400">
          <p className="text-lg">Navbar is ready. Hero section coming next.</p>
        </div>
      </main>
    </div>
  )
}

export default App
