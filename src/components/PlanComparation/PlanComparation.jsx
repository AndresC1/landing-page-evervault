import { useLayoutEffect, useState } from 'react'
import TableRow from './row/TableRow'
import PlanSelect from './PlanSelect/PlanSelect'
import plansList from './planList'

export default function PlanComparation() {
    const [plan, setPlan] = useState(1)
    const [planSelected, setPlanSelected] = useState([1, window.innerWidth>767])
    useLayoutEffect(() => {
        const handleResize = () => {
            setPlanSelected([plan, window.innerWidth > 767]);
          };
        window.addEventListener('resize', handleResize)
        return(() => {
            window.removeEventListener('resize', handleResize)
        })
    }, [plan])
    let fnPlanSelect = (planTypeSelected) => {
        setPlan(planTypeSelected)
        setPlanSelected([planTypeSelected, innerWidth>767])
    }
  return (
    <div className='flex justify-center items-center flex-col mt-20'>
        <PlanSelect fnPlanSelect={fnPlanSelect} />
        <div className="w-full max-w-[80rem] my-10 grid grid-cols-2 md:grid-cols-4 px-4">
            {
                plansList[0].map((data, item) => {
                    if(planSelected[1] && planSelected[0] != 1){
                        setPlanSelected([1, true],)
                    }
                    if(item === 0){
                        return (
                            <TableRow 
                                key={item} 
                                firstColumn={data} 
                                secondColumn={plansList[planSelected[0]][item]} 
                                thirdColumn={plansList[2][item]} 
                                quarterColumn={plansList[3][item]} 
                                isComplete={planSelected[1]}
                                btnText={"Get Started"} 
                                isTitled={data.isTitled} 
                                description={"Find one that’s right for you"} 
                            />
                        )
                    } else{
                        return (
                            <TableRow 
                                key={item} 
                                firstColumn={data} 
                                secondColumn={plansList[planSelected[0]][item]} 
                                thirdColumn={plansList[2][item]} 
                                quarterColumn={plansList[3][item]}
                                isComplete={planSelected[1]}
                            />
                        )
                    }
                })
            }
        </div>
    </div>
  )
}
