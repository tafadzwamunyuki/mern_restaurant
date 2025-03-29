import React from 'react'
import { data } from "../restApi.json"

const Team = () => {
  return (
    <section className='team' id="team">
    <div className='container'>
      <div className='heading_section'>
        <h1 className='heading'>Our Team</h1>
        Meet the Heart Behind <b>At Tha Don Restaurant</b>
        <p><b>At Tha Don Restaurant</b>, our team is more than just chefs and servers—we’re a family united by a shared passion for food and hospitality. Every dish we serve and every smile we share reflects our commitment to creating memorable experiences for our guests.
        From the kitchen to the front of the house, each team member brings creativity, dedication, and a love for exceptional service. Together, we work tirelessly to ensure every visit feels special—because to us, you're not just a customer, you're part of our story.</p>
      </div>
      <div className='team_container'>
        {
            data[0].team.map((element) => {
                return (
                    <div className='card' key={element.id}>
                        <img src={element.image} alt={element.name} />
                        <h3>{element.name}</h3>
                        <p>{element.designation}</p>
                    </div>
                )
            })
        }
      </div>
      </div>
    </section>
  )
}

export default Team
