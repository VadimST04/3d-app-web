import Experience from './Experience'

const App = () => {
  return (
    <div className="h-dvh bg-[#030B22] text-4xl text-white flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-center">Cube</div>
      <div className="flex-1">
        <Experience />
      </div>
    </div>
  )
}

export default App
