import React, { useEffect, useState } from 'react'
import { getBrand } from '../../../api/brand'
import './brand.module.less'

export default function Brand() {
  let [Brands, SetBrands] = useState([])
  useEffect(() => {
    async function Barndss() {
      let res = await getBrand()
      console.log(res);
      let data = res.data.data
      SetBrands(data)
    }
    Barndss()
  }, [])
  return (
    <div>
      {
        Brands.map(item => {
          return (
            <div key={item.id} className='pp'>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <img src={item.image} alt="" />
              <span>{item.letter}</span>

            </div>
          )

        })
      }
    </div>
  )
}
