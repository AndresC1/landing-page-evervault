import TableColumn from '../column/TableColumn'

export default function TableRow({firstColumn, secondColumn, thirdColumn, quarterColumn, btnText, isTitled, description, isComplete}) {
  return (
    <>
        <div className="w-full border-r-[1px] border-b-[1px] border-[#333] flex-col flex justify-center items-start p-4">
            {
                isTitled ? <h1 className="text-2xl font-medium text-white">{firstColumn}</h1> : <h1>{firstColumn}</h1>
            }
            {description}
        </div>
        <TableColumn firstTitle={secondColumn} buttonTitle={btnText} />
        {
            isComplete === true
            ?   <>
                    <TableColumn firstTitle={thirdColumn} buttonTitle={btnText} />
                    <TableColumn firstTitle={quarterColumn} buttonTitle={btnText} />
                </>
            : <></>
        }
    </>
  )
}
