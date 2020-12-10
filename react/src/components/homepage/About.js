import React from 'react'
import './About.sass'

function About() {
  return (
    <>
      <div className="about">
        <div className="home-title">
          <img src="/images/title-about.png" alt="" />
        </div>

        <div className="leaf">
          <img src="/images/leaf.png" alt="" />
        </div>
        <div className="content">
          <h5>Know about WELLBEING CYCLE</h5>
          <h3>了解更多永續</h3>
          <p>
            別買你所不需要的東西，也許，就是我們能為環境所做最好的事。因此，艸艸專注於打造肌膚的真實需求、減少環境所不需要的；透過永續包材、嚴選成分、理念傳遞，我們相信只有行動，才能帶來改變。
          </p>
        </div>
        <div className="recicle">
          <img src="/images/homepage4.png" alt="" />
        </div>
        <div className="icon">
          <img src="/images/know-more-1.png" alt="" />
          <img src="/images/know-more-2.png" alt="" />
          <img src="/images/know-more-3.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default About
