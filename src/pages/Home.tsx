 import ChartBox from '../components/ChartBox'
import TopBox from '../components/TopBox'
import '../index.css'
import '../data'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../data'
import BarChartBox from '../components/BarChartBox'
import PieChartBox from '../components/PieChartBox'
import BigChartBox from '../components/BigChartBox'


function Home() {
  return (
    <div className="box-container"> 
      <div className='box box-length'><TopBox/></div>
      <div className='box'><ChartBox {...chartBoxUser} /></div>
      <div className='box'><ChartBox  {...chartBoxProduct} /></div>
      <div className='box box-length'><PieChartBox/></div>
      <div className='box'><ChartBox {...chartBoxRevenue}/></div>
      <div className='box'><ChartBox {...chartBoxConversion}/></div>
      <div className='box box-width'><BigChartBox/></div>
      <div className='box'><BarChartBox {...barChartBoxVisit} /></div>
      <div className='box'><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home