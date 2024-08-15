import React from 'react';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
export default function Track() {

    const loggedData= useContext(UserContext)

    const [foodItems,setFoodItems]= useState([])

    const [food,setFood]= useState(null)

    function searchFood(event)
    {
        if(event.target.value.length!==0)
        {
            fetch(`http://localhost:8000/foods/${event.target.value}`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${loggedData.loggedUser.token}`
                }
    
            })
            .then((response)=>response.json())
            .then((data)=>{
                if(data.message===undefined)
                {
                    setFoodItems(data)
                }
                else
                {
                    console.log(data.message)
                    setFoodItems([])
                    setFood(null)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else{
            setFoodItems([])
            setFood(null)
        }
    }
    return (
        <>
            <section className='track-container'>
                <div className='search'>
                   <input onChange={searchFood} type="search" className='search-inp 'placeholder='search food item'/>
                </div>
                {
                        foodItems.length!==0?(
                            <div className="search-results">
                                {
                                    foodItems.map((item)=>{
                                        return (
                                            <p className="item" onClick={()=>{
                                                setFood(item)
                                            }} key={item._id}>{item.name}</p>
                                        )
                                    })
                                }
                            </div> 
                        ):null
                }
                {
                    food!==null?
                    <div className="display-product">
                        <p>{food.name}</p>
                        <p>{food.calories}</p>
                        <p>{food.protein}</p>
                        <p>{food.fat}</p>
                        <p>{food.fiber}</p>
                        <p>{food.carbohydrates}</p>
                    </div>:null
                }
            </section>
        </>
    );
}
