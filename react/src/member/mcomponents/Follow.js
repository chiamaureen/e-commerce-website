import React, { useState, useEffect } from 'react'
import '../member.css'
import FollowTbody from './FollowTbody'

function Follow() {


  const [memberFollowingItems,setMemberFollowingItems] = useState([])

  // const localStoragememberFollowingItems = JSON.parse(localStorageItems)
  // setMemberFollowingItems(localStoragememberFollowingItems)


  // useEffect(() => {
  //   const a = [
  //     {
  //       "sid": "1",
  //       "name": "順其自然卸妝乳",
  //       "price": 350,
  //       "picture": "/images/facial1.jpg"
  //     },
  //     {
  //       "sid": "2",
  //       "name": "保濕面膜",
  //       "price": 300,
  //       "picture": "/images/facial2.jpg"
  //     }]
  //   localStorage.setItem('memberFollowingItems',JSON.stringify(a))
  // }, [])
  
   //從localStorage拿追蹤商品
  function getItemFromLocalStorage(){
    const localStorageItems = localStorage.getItem('memberFollowingItems')
    setMemberFollowingItems(JSON.parse(localStorageItems))
  }

  //要傳到<FollowTbody /> 從追蹤清單移除的方法
  const handleDelete = (sid) => {
    const newmemberFollowingItems = memberFollowingItems.filter((item, index) => item.sid !== sid)
    const afterDel =   localStorage.setItem('memberFollowingItems' , JSON.stringify(newmemberFollowingItems))
      setMemberFollowingItems(afterDel)
  }

  const handleAddToCart = (e) =>{
    const cartItem =  localStorage.getItem('cart')
    const data = {
      sid:e.sid,
      name:e.name,
      price:e.price,
      picture:e.picture,
      amount:1
    }
    if(cartItem === null){
      localStorage.setItem('cart',JSON.stringify([data]))
    }else{
      const newCart = JSON.parse(cartItem)
      const addNewItem = [data,...newCart]
      localStorage.setItem('cart',JSON.stringify(addNewItem))
    }
    const newmemberFollowingItems = memberFollowingItems.filter((item, index) => item.sid !== e)
    const afterDel =   localStorage.setItem('memberFollowingItems' , JSON.stringify(newmemberFollowingItems))
      setMemberFollowingItems(afterDel)
  }

  useEffect(()=>{
    getItemFromLocalStorage()
  },[memberFollowingItems])


  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>追蹤商品</h4>
        </div>
        <div className="row order-detail">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">商品圖</th>
                <th scope="col">名稱</th>
                <th scope="col">價格</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            
            <tbody>
            {memberFollowingItems.map((item, index) => {
              return(
              <FollowTbody
                key={item.sid}
                picture={item.picture}
                name={item.name}
                price={item.price}
                addToCartMethod={()=> handleAddToCart(item)}
                deleteMethod={() => handleDelete(item.sid)}
               />
            )})}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Follow