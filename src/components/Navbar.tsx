 
function Navbar() {
  return (
    <div className="flex px-4 py-3 justify-between items-center"> 
        <div className="font-bold text-xl">Dashboard</div>
        <div className="flex gap-8">
            <img  src="/search.svg" alt="" />
            <img  src="/app.svg" alt="" />
            <img  src="/expand.svg" alt="" />
            <div className='flex relative'>
              <img   src="/notifications.svg" alt="" />
              <span className="bg-red-500 rounded-full h-4 w-4 flex justify-center items-center absolute bottom-4 left-3">1</span>
            </div>
            <img  src="/settings.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar