import React from 'react'
import Boxes from '../../Components/Boxes/Boxes'
import MainChart from '../../Components/MainChart/MainChart'
import MobileChart from '../../Components/MainChart/MobileChart'
import UsersBox from '../../Components/UsersBox/UsersBox'

export default function Index() {
  return (
    <div>
      <Boxes/>
      <div className='hidden md:block'>
        <MainChart/>
      </div>
      <div className='block md:hidden'>
       <MobileChart/>
      </div>
      <UsersBox/>
    </div>
  )
}
