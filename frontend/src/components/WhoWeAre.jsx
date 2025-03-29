import React from 'react'
import { data } from "../restApi.json"

const WhoWeAre = () => {
  return (
    <section className='who_are_we' id='who_are_we'>
      <div className='container'>
        <div className='text_banner'>
            {
                data[0].who_we_are.slice(0, 2).map(element => {
                    return (
                        <div className='card' key={element.id}>
                            <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                    )
                    })
                }
        </div>
        <div className='image_banner'>
            <img src='/center.svg' className='gradient_bg' alt='' />
            <img src='/whoweare.png' alt='' />
        </div>

        <div className='text_banner'>
            {
                data[0].who_we_are.slice(2).map(element => {
                    return (
                        <div className='card' key={element.id}>
                            <h1 style={{fontWeight: "300"}} className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                    )
                    })
                }
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
