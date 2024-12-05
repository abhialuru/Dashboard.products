import { NavLink } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type PropType = {
  color: string,
  icon: string,
  title: string,
  number: number | string,
  dataKey: string,
  percentage: number,
  chartData: object[]
}

 
function ChartBox(props: PropType) {

  
  return (
    <div className="flex w-full h-full"> 
        <div className="w-[70%] flex flex-col justify-between items-start">
            <h1 className="text-xl font-semibold">{props.title}</h1>
            <h1 className="text-3xl font-bold">{props.number}</h1>
             <NavLink to='/'><span className="text-lg">view all</span></NavLink>
        </div>
        <div className="w-[40%] flex flex-col justify-between items-end">
            <div className="w-full h-full">
            <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
                <Tooltip
                contentStyle={{background: 'transparent', border: 'none'}}
                labelStyle={{display: 'none'}}
                position={{x:10, y:50}}
                />
                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
            </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="flex flex-col text-right">
            <span className="text-xl font-bold"style={{color:props.percentage<0?'tomato':'limegreen'}}>{props.percentage}</span>
            <span>this month</span>
            </div>
          
        </div>
    </div>
  )
}

export default ChartBox