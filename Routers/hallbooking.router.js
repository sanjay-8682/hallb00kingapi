import express from 'express'
import {getRoomsDetails,getBookingDetails,bookingCustomerDetails,getBookedroomDeatails,getallCustbookedDet,getCustcountDetail} from '../Controllers/hallbooking.controller.js'



const router=express.Router()
//1,
router.get('/data',getRoomsDetails)
//2,
router.get('/booked',getBookingDetails)
//3,
router.post('/add',bookingCustomerDetails)
//4
router.get('/roombooked',getBookedroomDeatails)
//5
router.get('/allcust',getallCustbookedDet)
//6
router.get('/count',getCustcountDetail)


export default router;