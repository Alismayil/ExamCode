import React, { createContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const BasketContext=createContext()
function BasketProvider({children}) {
    const [basket, setBasket] = useState(localStorage.getItem("basket")? JSON.parse(localStorage.getItem("basket")):[]);
    
    useEffect(() => {
     ;localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket]);
    
    function handleAddBasket(item) {
        // setBasket([...basket, item])
        // console.log( salam);
        const basketProduct=basket.find((x)=>x._id === item._id)
        if (basketProduct) {
            basketProduct.count++
            basketProduct.total= basketProduct.count * basketProduct.price
            toast.success(`Send Basket Count: ${basketProduct.count}`)
            
            return
        }else{
            const total =item.price
            setBasket([...basket ,{...item , total:total , count :1}])
            toast.success(`Send Basket : ${item.name}`)
        }
    }

    function handleDelete(id) {
        setBasket(basket.filter((x)=>x._id !== id))
    }

    function handleAlldelete() {
        setBasket([])
    }

    function handleCountVal(isAdd, id) {
        const valueFind=basket.find((x)=>x._id === id)
        if (valueFind && isAdd === true) {
            valueFind.count++
            valueFind.total= valueFind.count * valueFind.price
            setBasket([...basket])


        }else{
            if (valueFind.count === 1) {
                setBasket(basket.filter((x)=>x._id !== id))
                return
            }
          else{
            valueFind.count--
            valueFind.total= valueFind.count * valueFind.price
            setBasket([...basket])
          }
        }
    }

    const data={
basket, setBasket, 
handleAddBasket, 
handleAlldelete, 
handleDelete,
handleCountVal
    }
  return (
   <BasketContext.Provider value={data}>
    {children}
   </BasketContext.Provider>
  )
}

export default BasketProvider
