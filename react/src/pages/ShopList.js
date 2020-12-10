import React, { useState, useEffect } from 'react'
import Search from '../components/ShopList/Search'
import ControlledCarousel from '../components/ShopList/ControlledCarousel'
import ProductRow from '../components/ShopList/ProductRow'
import Nav from '../components/ShopList/Nav'
import { withRouter } from 'react-router'

import '../shop_list.css'

function ShopList(props) {
  console.log(props)
  const {isAuth}=props
  const [inputSearch, setInputSearch] = useState('')
  const [category, setCategory] = useState(0)
  const [mydata, setMydata] = useState([])
  const [Option, setOption] = useState(0)
  console.log(Option)
  const getData = async () => {
    const res = await fetch('http://localhost:3000/product/get-db', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ Options: Option, inputSearch }),
      
    })
    const data = await res.json()
    console.log(Option)
    setMydata(data)
  }
  useEffect(() => {
    getData()
  }, [Option])

  return (
    <>
      <ControlledCarousel />
      <Search
        data={mydata}
        setOption={setOption}
        Option={Option}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        getData={getData}
      />
      <Nav setCategory={setCategory} />

      <ProductRow data={mydata} category={category} inputSearch={inputSearch} isAuth={isAuth}/>
    </>
  )
}
export default withRouter(ShopList)