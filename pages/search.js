'use client'
import React from 'react'
import { useRouter} from 'next/router'
import { format, parseISO}  from 'date-fns'
import Header from './components/Header'
import Footer from './components/Footer'
import InfoCard from './components/InfoCard'
import ReactMap from './components/ReactMap'

const Search = () => {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = startDate && format(new Date(startDate), 'dd MMMM yyyy');
    const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yyyy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    const searchResults = [
        {
            "img": "https://links.papareact.com/xqj",
            "location": "Private room in center of London",
            "title": "Stay at this spacious Edwardian House",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.73,
            "price": "$30 / night",
            "total": "$117 total",
            "long": -0.0022275,
            "lat": 51.5421655
            },
            {
            "img": "https://links.papareact.com/hz2",
            "location": "Private room in center of London",
            "title": "Independant luxury studio apartment",
            "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
            "star": 4.3,
            "price": "$40 / night",
            "total": "$157 total",
            "long": -0.095091,
            "lat": 51.48695
            },
            {
            "img": "https://links.papareact.com/uz7",
            "location": "Private room in center of London",
            "title": "London Studio Apartments",
            "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
            "star": 3.8,
            "price": "$35 / night",
            "total": "$207 total",
            "long": -0.135638,
            "lat": 51.521916
            },
            {
            "img": "https://links.papareact.com/6as",
            "location": "Private room in center of London",
            "title": "30 mins to Oxford Street, Excel London",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.1,
            "price": "$55 / night",
            "total": "$320 total",
            "long": -0.069961,
            "lat": 51.472618
            },
            {
            "img": "https://links.papareact.com/xhc",
            "location": "Private room in center of London",
            "title": "Spacious Peaceful Modern Bedroom",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
            "star": 5,
            "price": "$60 / night",
            "total": "$450 total",
            "long": -0.08472,
            "lat": 51.510794
            },
            {
            "img": "https://links.papareact.com/pro",
            "location": "Private room in center of London",
            "title": "The Blue Room In London",
            "description": "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
            "star": 4.23,
            "price": "$65 / night",
            "total": "$480 total",
            "long": -0.094116,
            "lat": 51.51401
            },
            {
            "img": "https://links.papareact.com/8w2",
            "location": "Private room in center of London",
            "title": "5 Star Luxury Apartment",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 3.85,
            "price": "$90 / night",
            "total": "$650 total",
            "long": -0.109889,
            "lat": 51.521245
            }
    ]

    console.log(location)


  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className='flex'>
            <section className='flex-grow pt-15 px-6'>
                <p className='text-xs pt-5'>300+ Stays - {range} - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>

                 <div className='flex flex-col'>
                {searchResults.map(searchResults => (
                    <InfoCard 
                    key={searchResults.id}
                    img={searchResults.img}
                    location={searchResults.location}
                    description={searchResults.description}
                    star={searchResults.star}
                    price={searchResults.price}
                    total={searchResults.total}
                    />
                ))}
                </div>
            </section>

            <section className='hidden flex-shrink-0 xl:inline-flex xl:min-w-[600px]'>
                <ReactMap searchResults={searchResults}/>
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search