import React from 'react'
import PropertyCard from './PropertyCard'
type Property ={
id: string
image: string
title: string
location: string
price: string
update: string
status: 'Booked' | 'Available'
}
const PropertList = () => {
    const Properties: Property[]= [
        {
        id: "1",
        image:"src/assets/room-1.png",
        title:"Luxury Apartment In victoria island",
        location: "victoria island in lagos",
        price: "350,000",
       update: "updated Dec 5",
        status:"Booked"
        },
         {
        id: "2",
        image:"src/assets/room-1.png",
        title:"Luxury Apartment In victoria island",
        location: "victoria island in lagos",
        price: "350,000",
       update: "updated Dec 5",
        status:"Available"
        },
        {
        id: "3",
        image:"src/assets/room-1.png",
        title:"Luxury Apartment In victoria island",
        location: "victoria island in lagos",
        price: "350,000",
       update: "updated Dec 5",
        status:"Available"
        },
        {
        id: "4  ",
        image:"src/assets/room-1.png",
        title:"Luxury Apartment In victoria island",
        location: "victoria island in lagos",
        price: "350,000",
       update: "updated Dec 5",
        status:"Available"
        }
    ]
  return (
    <div className='grid grid-cols-1  md:grid-cols-3  gap-1 ml-1'>
      {Properties.map((property)=>(
        <PropertyCard key={property.id} property={property}/>
      ))}

    </div>
  )
}

export default PropertList