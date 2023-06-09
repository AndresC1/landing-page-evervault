import React from 'react'

export default function TableRow({firstColumn, secondColumn, btnText, isTitled, description}) {
  return (
    <>
        <div className="w-full border-r-[1px] border-b-[1px] border-[#333] flex-col flex justify-center items-start p-4">
            {
                isTitled ? <h1 className="text-2xl font-medium text-white">{firstColumn}</h1> : <h1>{firstColumn}</h1>
            }
            {description}
        </div>
        <div className="w-full flex justify-center items-center gap-2 p-4 border-b-[1px] border-[#333] flex-col">
            {
                isTitled ? <h1 className="text-2xl font-medium text-white">{secondColumn}</h1> : <h1>{secondColumn}</h1>
            }
            {
                btnText
                ? <button className="w-11/12 py-2 bg-white text-black font-medium rounded-full">{btnText}</button>
                : <></>
            }
        </div>
    </>
  )
}
