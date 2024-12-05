 
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

type Prop = {
  title: string,
  color: string,
   dataKey: string,
   chartData:  object[],

}

function  BarChartBox(props: Prop) {
  return (
   
    <div className='w-full h-full'> 
      <h1 className='text-xl font-semibold' >{props.title}</h1> 
    <ResponsiveContainer width="100%" height={90} >
        <BarChart data={props.chartData}>
          <Tooltip
          contentStyle={{background: 'transparent', border: 'none'}}
          labelStyle={{display: 'none'}}
          cursor={{fill:'none'}}
        
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
 
  )
}

export default  BarChartBox;