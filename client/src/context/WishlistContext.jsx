import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const WishlistContext=createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist")? JSON.parse(localStorage.getItem("wishlist")):[]);
    
    useEffect(() => {
     ;localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist]);
    
    function handleAddwishlist(item) {
        const wishlistProduct=wishlist.find((x)=>x._id === item._id)
        if (wishlistProduct) {
            setWishlist(wishlist.filter((x)=>x._id !== item._id))
            toast.error("Delete Wishlist")
        }else{
            const total = item.price
            setWishlist([...wishlist ,{...item , total:total , count :1}])
            toast.success('Send Wishlist')
        }
    }

    function handleDelete(id) {
        setWishlist(wishlist.filter((x)=>x._id !== id))
    }

    function handleAlldelete() {
        setWishlist([])
    }

  
    const data={
wishlist, setWishlist, 
handleAddwishlist, 
handleAlldelete, 
handleDelete,
    }
  return (
   <WishlistContext.Provider value={data}>
    {children}
   </WishlistContext.Provider>
  )
}

export default WishlistProvider
