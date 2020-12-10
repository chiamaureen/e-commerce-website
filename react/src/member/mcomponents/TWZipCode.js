import React, { useState, useEffect } from 'react'
import { countries, townships, postcodes } from './TWdata.js'

function TWZipCode(props) {
  //   const [country, setCountry] = useState(-1)
  //   const [township, setTownship] = useState(-1)
  //   //備用，如果需要設定郵遞區號時
  //   const [postcode, setPostcode] = useState('')

  //   const [countryDb, setCountryDb] = useState('')
  // const [townshipDb, setTownshipDb] = useState('')
  // const [townshipDetermine, setTownshipDetermine] = useState('')
  const {
    country,
    setCountry,
    township,
    setTownship,
    postcode,
    setPostcode,
    addressStringDb,
    setAddressStringDb,
  } = props

  useEffect(() => {
    console.log(postcode)
    // console.log(countries)
    // console.log(townships[1][4])
    // console.log(postcodes)
    for (let i = 0; i < postcodes.length; i++) {
      for (let j = 0; j < postcodes[i].length; j++) {
        if (postcodes[i][j] === postcode) {
          console.log(i, j)
          console.log(countries[i])
          // const newCountry = countries[i]
          setCountry(i)
          console.log(townships[i][j])
          // const newtownship = townships[i][j]
          setTownship(j)
        }
      }
    }
  }, [postcode])

  return (
    <>
      <div className="row">
        <div className="col-3">
          <input className="form-con" value={postcode} disabled />
          {/* {country > -1 && township > -1 && postcodes[country][township]} */}
        </div>
        <div className="col-4">
          <select
            className="form-con"
            value={country}
            onChange={(e) => {
              // 將字串轉成數字
              setCountry(+e.target.value)
              // 重置township的值
              setTownship(-1)
            }}
          >
            <option value={-1}>選擇縣市</option>

            {countries.map((v, i) => (
              <option key={i} value={i}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="col-5">
          <select
            className="form-con"
            value={township}
            onChange={(e) => {
              // 將字串轉成數字
              setTownship(+e.target.value)
              setPostcode(postcodes[country][+e.target.value])
            }}
          >
            <option value={-1}>選擇區域</option>
            {country > -1 &&
              townships[country].map((v, i) => (
                <option key={i} value={i}>
                  {v}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <input
            className="form-con"
            type="text"
            placeholder="請輸入地址"
            value={addressStringDb}
            onChange={(e) => {
              const newAddressString = e.target.value
              setAddressStringDb(newAddressString)
              setPostcode(postcodes[country][township])
            }}
          />
        </div>
      </div>
    </>
  )
}

export default TWZipCode
