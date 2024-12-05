 import '../data'
import { topDealUsers } from '../data'

function TopBox() {
  return (
    <div className='w-full h-full'>
        <h1 className="text-xl font-semibold pb-8">Top Deals</h1>
        <div>
        {topDealUsers.map((users,_)=>
        <div key={users.id} className='flex justify-between items-center mb-4'>
        <div className='flex gap-4'>
            <img className='rounded-full w-10' src={users.image} alt={users.name} />
            <div>
               <p>{users.name}</p>
               <p>{users.email}</p>
            </div>
            </div>
            <span className='font-semibold'>{users.amount}</span>

        </div>
        )}
        </div>

    </div>
  )
}

export default TopBox