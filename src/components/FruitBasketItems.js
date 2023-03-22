import React from "react";
import '../App.css';

export default function FruitBasketItems({icon, name, amount, add, sub}) {

    return <>
        <div className="fruit-item-box">
            <div>
                <p>{icon}</p>
                <p>{name}</p>
            </div>
            <div>
                <button
                    type="button"
                    onClick={sub}
                    disabled={amount === 0}
                >-
                </button>
                <p>{amount}</p>
                <button
                    type="button"
                    onClick={add}
                >+
                </button>
            </div>
        </div>
    </>
}