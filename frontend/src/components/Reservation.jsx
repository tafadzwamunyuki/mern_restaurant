import React, { useState } from 'react'
import { HiOutlineArrowRight } from "react-icons/hi"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Reservation = () => {
    {/* Call var from Backend/controller/reservation.js */}
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState(0)

    const navigate = useNavigate()
    const handleReservation = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/reservation/send",
            {firstName, lastName, email, phone, date,time},
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
            )

            toast.success(data.message)
            setFirstName("")
            setLastName("")
            setPhone(0)
            setEmail("")
            setTime("")
            setDate("")
            navigate("/success")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

  return (
    <section className='reservation' id='reservation'>
      <div className='container'>
        <div className='banner'>
            <img src='/reservation.png' alt='' />
        </div>
        <div className='banner'>
            <div className='reservation_form_box'>
                <h1>Make A Reservation</h1>
                <p>For further questions, please call: <b>+447425363721</b></p>
                
                <form>
                    <div>
                    <input 
                         type='text'
                         value={firstName}
                         onChange={(e) => setFirstName(e.target.value)}
                         placeholder='Enter First Name' 
                    />

                    <input 
                         type='text'
                         value={lastName}
                         onChange={(e) => setLastName(e.target.value)}
                         placeholder='Enter Last Name' 
                    />
                    </div>
                    <div>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} 
                        placeholder='Enter Date'  
                    />
                    <input
                        type='time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder='Enter Time'
                    />
                    </div>
                    <div>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email'
                        />
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='Enter Phone Number'
                    />
                    
                    </div>
                    <button type="submit" onClick={handleReservation}>
                        Make Reservation{" "}
                        <span>
                            <HiOutlineArrowRight />
                        </span>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation
