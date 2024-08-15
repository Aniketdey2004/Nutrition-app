import React from 'react';
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import Header from './Header'
export default function Track() {

    const loggedData= useContext(UserContext);

    const [foodItems,setFoodItems]= useState([]);

    const [copyfood,setCopyFood]= useState(null);

    const [food,setFood]= useState(null);

    const [quantity,setQuantity]= useState(100);

    function updateQuantity(event) {
        const newQuantity = event.target.value !== null ? event.target.value : 100;
        setQuantity(newQuantity);
        updateFood(newQuantity);
    }
    
    function updateFood(newQuantity) {
        if (newQuantity && food) {
            let cfood = { ...food };
            cfood.calories = (cfood.calories * newQuantity) / 100;
            cfood.protein = (cfood.protein * newQuantity) / 100;
            cfood.fat = (cfood.fat * newQuantity) / 100;
            cfood.fiber = (cfood.fiber * newQuantity) / 100;
            cfood.carbohydrates = (cfood.carbohydrates * newQuantity) / 100;
            setCopyFood(cfood);
        } else {
            setCopyFood(food);
        }
    }

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
            <Header/>
            <section className='track-container'>
                <div className='search'>
                   <input onChange={searchFood} type="search" className='search-inp 'placeholder='search food item'/>
                </div>
                {
                        foodItems.length!==0?(
                            <div className="search-container">
                                <div className="search-results">
                                    {
                                        foodItems.map((item)=>{
                                            return (
                                                <p className="item" onClick={()=>{
                                                    setFood(item)
                                                    setCopyFood(item)
                                                }} key={item._id}>{item.name}</p>
                                            )
                                        })
                                    }
                                </div> 
                            </div>
                        ):null
                }
                {
                    food!==null?
                    <div className="display-product">
                        <p>{copyfood.name}</p>
                        <p>Calories={copyfood.calories}</p>
                        <p>Protein={copyfood.protein}</p>
                        <p>Fat={copyfood.fat}</p>
                        <p>Fiber={copyfood.fiber}</p>
                        <p>Carbohydrates={copyfood.carbohydrates}</p>
                        <input onChange={(event) => {
                            updateQuantity(event);
                        }} className='Quantity-cal' type="number" placeholder='Enter quantity Consumed' />
                        <button>Add</button>
                    </div>:null
                }
            </section>
        </>
    );
}
