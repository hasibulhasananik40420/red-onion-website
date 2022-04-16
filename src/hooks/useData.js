import React, { useEffect, useState } from 'react';

const useData = () => {
    const [breakfast , setBreakfast] = useState([])
     useEffect( ()=>{
         fetch("breakfast.json")
         .then(res => res.json())
         .then(data=> setBreakfast(data))
     },[])


      const [lunch , setLunch] = useState([])
      useEffect( ()=>{
        fetch("lunch.json")
        .then(res => res.json())
        .then(data=> setLunch(data))
    },[])

    const [dinner , setDinner] = useState([])
      useEffect( ()=>{
        fetch("dinner.json")
        .then(res => res.json())
        .then(data=> setDinner(data))
    },[])


    return [breakfast , lunch ,dinner]
       
};

export default useData;