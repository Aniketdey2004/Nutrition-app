import React from 'react';
import Header from './Header';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import { useState,useEffect } from 'react';
export default function Diet(){
    const loggedData= useContext(UserContext);

    const [items,setItems]= useState([]);

    const [date,setDate] = useState(new Date())

    let [total,setTotal]= useState({
        totalCaloreis:0,
        totalProtein:0,
        totalCarbs:0,
        totalFats:0,
        totalFiber:0
    })

    
    useEffect(()=>{

        fetch(`http://localhost:8000/track/${loggedData.loggedUser.userid}/${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`,{
            method:"GET",
            headers:{
                "Authorization":`Bearer ${loggedData.loggedUser.token}`
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setItems(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[date])

    
    
    useEffect(()=>{
        calculateTotal();
    },[items])

    function calculateTotal()
    {
        let totalCopy = {
            totalCaloreis:0,
            totalProtein:0,
            totalCarbs:0,
            totalFats:0,
            totalFiber:0
        };

        items.forEach((item)=>{
            totalCopy.totalCaloreis += item.details.calories;
            totalCopy.totalProtein += item.details.protein;
            totalCopy.totalCarbs += item.details.carbohydrates;
            totalCopy.totalFats += item.details.fat;
            totalCopy.totalFiber += item.details.fiber;

        })
        setTotal(totalCopy);
    }

    return(
        <>
            <Header/>
            <section className=" diet-container">
                <div className='search'>
                <input type="date" className='search-inp' onChange={(event)=>{
                 setDate(new Date(event.target.value));
                }}/>

                </div>
                <div className="search-container">
                    {
                        items.map((item)=>{
                            return (
                                <>
                                <div className="display-product">
                                    <p>{item.foodId.name}</p>
                                    <p>Calories={item.details.calories}</p>
                                    <p>Carbohydrates={item.details.carbohydrates}</p>
                                    <p>fat={item.details.fat}</p>
                                    <p>fiber={item.details.fiber}</p>
                                    <p>protein={item.details.protein}</p>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <h1>Total Intake</h1>
                <div className="display-product">
                    <p> {total.totalCaloreis} Kcal </p>
                    <p>Protein={total.totalProtein}g</p> 
                    <p>Carbohydrates={total.totalCarbs}g</p> 
                    <p>Fats={total.totalFats}g</p> 
                    <p>Fiber={total.totalFiber}g</p>
                </div>
                
            </section>
        </>
    )
}