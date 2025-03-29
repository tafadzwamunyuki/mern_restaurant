import mongoose from "mongoose";
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name cannot be less than 3 characters long"],
        maxLength: [30, "First name cannot be more 30 characters long"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name cannot be less than 3 characters long"],
        maxLength: [30, "Last name cannot be more 30 characters long"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [7, "Phone number must be at least 7 characters long"],
        maxLength: [20, "Phone number cannot be more than 20 characters long"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema)