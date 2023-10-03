const room=[
    {Number_of_seats_available:500,
     amenities_in_room:"A/C & non-A/C rooms,Attached bathroom,TV,Daining options",
     Price_for_1_hour:1500}
]

 const booking=[
     {Customer_name:"Sanjay",
      date:"01/02/2023",
      start_Time:"6 AM",
      end_Time:"10 PM",
      Room_id:1},

      {Customer_name:"Shreya",
       date:"02/02/2023",
       start_Time:"8 AM",
       end_Time:"10 PM",
       Room_id:2},

       {Customer_name:"Samson",
       date:"03/02/2023",
       start_Time:"1 AM",
       end_Time:"10 PM",
       Room_id:3}
 ]

 const roomBooked=[
     {Room_name:"AB Room",
      booked_status:"booked",
      Customer_name:"Sanjay",
     date:"01/02/2023",
     start_Time:"6 AM",
     end_Time:"10 PM"},

     {Room_name:"CD Room",
     booked_status:"booked",
     Customer_name:"Shreya",
    date:"02/02/2023",
    start_Time:"8 AM",
    end_Time:"10 PM"},

    {Room_name:"EF Room",
    booked_status:"booked",
    Customer_name:"Samson",
   date:"03/02/2023",
   start_Time:"1 AM",
   end_Time:"10 PM"}
 ]

 const allCustbooked=[
     {Customer_name:"Sanjay",
     Room_name:"AB Room",
    date:"01/02/2023",
    start_Time:"6 AM",
    end_Time:"10 PM"},

    {Customer_name:"Shreya",
     Room_name:"CD Room",
   date:"02/02/2023",
   start_Time:"8 AM",
   end_Time:"10 PM"},

   {Customer_name:"Samson",
    Room_name:"EF Room",
  date:"03/02/2023",
  start_Time:"1 AM",
  end_Time:"10 PM"}
 ]

 const allcustCount=[
  {Customer_name:"Sanjay",
   Room_name:"AB Room",
   date:"01/02/2023",
   start_Time:"6 AM",
   end_Time:"10 PM",
   Booking_id:1,
   Booking_date:"28/01/2023",
   Booking_status:"Booked"
  },
  
  {Customer_name:"Sanjay",
  Room_name:"CD Room",
  date:"05/02/2023",
  start_Time:"6 AM",
  end_Time:"10 PM",
  Booking_id:1,
  Booking_date:"30/01/2023",
  Booking_status:"Booked"},

  {Customer_name:"Sanjay",
  Room_name:"AB Room",
  date:"06/02/2023",
  start_Time:"3 AM",
  end_Time:"10 PM",
  Booking_id:1,
  Booking_date:"01/02/2023",
  Booking_status:"Booked"},

  {Customer_name:"Shreya",
  Room_name:"CD Room",
  date:"02/02/2023",
  start_Time:"8 AM",
  end_Time:"10 PM",
  Booking_id:1,
  Booking_date:"28/01/2023",
  Booking_status:"Booked"},

  {Customer_name:"Samson",
  Room_name:"EF Room",
  date:"31/01/2023",
  start_Time:"6 AM",
  end_Time:"10 PM",
  Booking_id:1,
  Booking_date:"29/01/2023",
  Booking_status:"Booked"},

  {Customer_name:"Kumaran",
  Room_name:"EF Room",
  date:"03/02/2023",
  start_Time:"1 AM",
  end_Time:"10 PM",
  Booking_id:1,
  Booking_date:"28/01/2023",
  Booking_status:"Booked"}
 ]
 
export const getRoomsDetails=(req,res)=>{
     res.status(200).json({data:room})
};

export const getBookingDetails=(req,res)=>{
     res.status(200).json({data:booking})
};

export const bookingCustomerDetails=(req,res)=>{
     
     
    
    const bkdate={
     Customer_name:req.body.Customer_name,
     date:req.body.date,
     start_Time:req.body.start_Time,
     end_Time:req.body.end_Time,
     Room_id:booking.length+1

    }
    const bookingdat=booking.find(booking=>booking.date===bkdate.date)
    if(!bookingdat) {
     
    booking.push(bkdate)
    res.status(200).json({message:"Booked Successfully",data:bkdate})}else{

    
    res.status(404).json({message:"Already booked"})}
    }

    export const getBookedroomDeatails=(req,res)=>{
     res.status(200).json({data:roomBooked})
    }
   
    export const getallCustbookedDet=(req,res)=>{
     res.status(200).json({data:allCustbooked})
    } 

    export const getCustcountDetail=(req,res)=>{
      const custCount={
        Booking_room_count:allcustCount.length
      }
      allcustCount.push(custCount)
      res.status(200).json({message:"Room Booked count",data:custCount})
    }
  

      
    
     
     

     

 


     

     

 