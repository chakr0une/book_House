'use client'


import { useContext } from "react";
import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";


const AddToCart = ({book}) => {
    const {cartData, setCartData} = useContext(StoreContext);
    const handleCart = (e, reason) => {
        e.preventDefault();
        const newData = {...book, type: reason};
        setCartData([...cartData, newData]);
        toast.success(`Added ${newData.title} to cart`, {
            autoClose: 1000,
            position: "top-right",
            });
        }
        
    return (
        <div className="flex justify-around mt-5 border-t-2 p-1">
            <button
                 className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                 onClick = {(event) => handleCart(event, 'Buy')}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline" /> To Buy</button>
            <button
                className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick = {(event) => handleCart(event, 'Rent')}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline" /> To Rent</button>
        </div>
    )

}

export default AddToCart