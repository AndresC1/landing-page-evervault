import { useRef, useState } from 'react'

export default function PlanSelect({fnPlanSelect}) {
  const [currentPlanSelect, setCurrentPlanSelect] = useState("Free")
  const boxPlanSelected = useRef(null)
  let openBoxPlanSelected = () => {
    boxPlanSelected.current.classList.remove("hidden")
  }
  let closeBoxPlanSelected = (selectedValue, selection) => {
    boxPlanSelected.current.classList.add("hidden")
    fnPlanSelect(selectedValue)
    setCurrentPlanSelect(selection)
  }
  return (
    <div className="w-full max-w-[80rem] md:hidden h-20 mb-4 mt-10 flex justify-center items-center px-12">
        <div onClick={() => openBoxPlanSelected()} className="w-full max-w-[80rem] md:hidden h-14 mb-4 mt-10 flex justify-between items-center px-5 border-[1px] border-[#333] rounded-md text-white font-semibold">
          <h1>{currentPlanSelect}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div ref={boxPlanSelected} onClick={() => {boxPlanSelected.current.classList.add("hidden")}} className=' fixed hidden z-10 top-0 w-full h-[100%]'>
          <div className='w-full transition-all flex-col flex justify-start items-start h-auto fixed bottom-0 bg-white text-[#111] text-lg font-medium z-20'>
            <div onClick={() => closeBoxPlanSelected(1, "Free")} className='w-full hover:bg-[#ddd] h-14 px-4 flex justify-start items-center'>Free</div>
            <div onClick={() => closeBoxPlanSelected(2, "Pro")} className='w-full hover:bg-[#ddd] h-14 px-4 flex justify-start items-center'>Pro</div>
            <div onClick={() => closeBoxPlanSelected(3, "Enterprise")} className='w-full hover:bg-[#ddd] h-14 px-4 flex justify-start items-center'>Enterprise</div>
          </div>
        </div>
    </div>
  )
}
