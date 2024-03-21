import Image from 'next/image'
import React from 'react'
import componies from '../images/companies.png';
import city from '../images/city.png'
import property from '../images/property.png'
import bed from '../images/double-bed.png'
import bath from '../images/shower.png'
import rescale from '../images/rescale.png'


export default function H2() {
    const citiesList=[
        {
            img:city,
            properties:10,
            name:'New York'
        },
        {
            img:city,
            properties:1,
            name:'Chicago'
        },
        {
            img:city,
            properties:0,
            name:'Manhattan'
        }
        , {
            img:city,
            properties:1,
            name:'San Diego'
        }, {
            img:city,
            properties:1,
            name:'San Francisco'
        }, {
            img:city,
            properties:2,
            name:'Los Angeles'
        }, {
            img:city,
            properties:0,
            name:'California'
        }, {
            img:city,
            properties:0,
            name:'New Jersey'
        }
    ]
    const getInfo=(beds,baths,sqft)=>{
        return <div className='flex gap-3'>
            <span className='flex gap-1'><Image src={bed} width={20} height={20} className='p-0.5'/><span>{beds} Beds</span></span>
            <span className='flex gap-1'><Image src={bath}  width={20} height={20} className='p-0.5'/><span> {baths} Baths</span></span>
            <span className='flex gap-1'><Image src={rescale}  width={20} height={20} className='p-0.5'/><span> {sqft} sqft</span></span>
        </div>
    }
    const propertiesList=[
        {
            img:property,
            properties:10,
            cost:'$5,800',
            name:'Luxury Family Home',
            desc:'132 Greeene Ave',
            info:getInfo(6,2,400)
        },
        {
            img:property,
            cost:'$4,800',
            name:'Gorgeous Villa Bay',
            desc:'132 Greeene Ave',
            info:getInfo(8,2,300)
            
        },
        {
            img:property,
            cost:'$2,850',
            name:'Skyper Pool Apartment',
            desc:'151 Greeene Ave',
            info:getInfo(4,1,200)
        }
        , {
            img:property,
            cost:'$4,600',
            name:'House on the Hollywood',
            desc:'374 Johnson Ave',
            info:getInfo(6,2,200)
        }, {
            img:property,
            cost:'$5,800',
            name:'Confortable Villa Green',
            desc:'178 Broadway, Brooklyn',
            info:getInfo(9,3,600)
        }, {
            img:property,
            cost:'$3,500',
            name:'Diamond Manor Apartment',
            desc:'343 Franklin Ave',
            info:getInfo(6,2,400)
        }, {
            img:property,
            cost:'$2,500',
            name:'Quality House for Sale',
            desc:'873 BEdford Ave',
            info:getInfo(10,2,500)
        }, {
            img:property,
            cost:'$599',
            name:'Villa With Pool',
            desc:'132 Greeene Ave',
            info:getInfo(6,2,400)
        }
    ]
  return (
    <div>
        <div className='flex flex-col items-center pt-24 gap-5'>
            <span>{"Trusted by world's best"}</span>
            <Image src={componies} alt='Companies'/>
        </div>
        <div className='p-36 pb-0'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                <h2>Properties By Cities</h2>
                <span>Aliquam lacinia diam quis lacus euismod</span>
                </div>
                <span className='cursor-pointer'>See all Cities</span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 pl-36 p-24 pb-0 gap-10'>
            {
                citiesList?.map((eachCity,index)=>{
                    return <City key={index} city={eachCity}/>
                })
            }
        </div>
        <div className='p-36 pb-0'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                <h2>Latest Properties</h2>
                <span>Aliquam lacinia diam quis lacus euismod</span>
                </div>
                <span className='cursor-pointer flex gap-3 items-center'>
                    <span className='p-3 bg-black text-white rounded-lg'>For Sale</span>
                    <span className='p-3 border border-black  rounded-lg'>For Rent</span>

                </span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 p-24 pl-36 gap-10'>
            {
                propertiesList?.map((eachCity,index)=>{
                    return <Properties key={index} city={eachCity}/>
                })
            }
        </div>
    </div>
  )
}

const City=({city})=>{
    return <div className='flex gap-3 items-center hover:scale-105 cursor-pointer transition-all'>
    <Image src={city.img} alt='city'/>
    <span className='flex flex-col'>
        <span className='font-bold'>{city.name}</span>
        <span className='text-sm'>{city.properties !=1 ? `${city.properties} Properties`:`${city.properties} Property` }</span>

    </span>
    </div>
}

const Properties=({city})=>{
    return <div className='flex flex-col gap-3 transition-all hover:scale-105 cursor-pointer'>
    <Image src={city.img} alt='property'/>
    <span className='flex flex-col gap-2'>
        <span className='font-bold'>{city.cost}</span>
        <span className='font-bold'>{city.name}</span>
        <span className='text-sm'>{city.desc}</span>
        <span className=''>{city.info}</span>
        

    </span>
    </div>
}