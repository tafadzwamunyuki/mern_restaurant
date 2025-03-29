import React from 'react'
import { data } from "../restApi.json"

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='heading_section'>
            <h1 className='heading'>Popular Dishes</h1>
            <p>At <b>Tha Don Restaurant</b>, every dish is a masterpiece. Our menu is a celebration of fresh ingredients, bold flavors, and culinary passion. Whether you're craving classic favorites or adventurous new tastes, we have something to delight every palate.
            From savory starters to indulgent desserts, each item is carefully curated to deliver an unforgettable dining experience. Browse our menu and discover the flavors that make us special—because great food is meant to be shared.</p>
        </div>
        <div className='dishes_container'>
            {data[0].dishes.map((element) => {
                return (
                    <div className='card' key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h3>{element.title}</h3>
                        <button>{element.category}</button>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default Menu
