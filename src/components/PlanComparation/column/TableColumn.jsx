export default function TableColumn({firstTitle, buttonTitle, isTitled}) {
    let verificationCheck = (data) => {
        let dataColumn = <h1>{data}</h1>
        if(data === "check"){
            dataColumn = (
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21" fill="#ddd"/><path fill="#111" d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"/></svg>
            </h1>
            )
        }
        return dataColumn
    }
  return (
    <div className="w-full flex justify-center items-center gap-2 p-4 border--[1px] border-[#333] flex-col">
            {
                isTitled ? <h1 className="text-2xl font-medium text-white">{firstTitle}</h1> : verificationCheck(firstTitle)
            }
            {
                buttonTitle != undefined
                ? <button className="w-11/12 py-2 bg-white text-black font-medium rounded-full">{buttonTitle}</button>
                : <></>
            }
        </div>
  )
}
