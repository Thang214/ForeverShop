import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";

const CartTotal = () => {

    const {currency, delivery_free, getCartAmount} = useContext(ShopContext);


  return (
    <div className="w-full">
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p className="">Subtotal</p>
                <p className="">{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">  
                <p className="">Shipping Free</p>
                <p className="">{currency} {delivery_free}</p>
            </div>
            <hr />
            <div className="flex justify-between">  
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_free}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal