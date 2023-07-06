import React from 'react';
import './App.css';

import FruitBasketItems from "./components/FruitBasketItems";
import UserForm from "./components/UserForm";

export default function App() {

    const [strawberry, setStrawberry] = React.useState(0)
    const [bananas, setBananas] = React.useState(0)
    const [appel, setAppel] = React.useState(0)
    const [kiwi, setKiwi] = React.useState(0)

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [age, setAge] = React.useState("")
    const [zipCode, setZipCode] = React.useState("")
    const [frequency, setFrequency] = React.useState("")
    const [deliveryTime, setDeliveryTime] = React.useState("")
    const [comment, setComment] = React.useState("")
    const [terms, setTerms] = React.useState("off")

    const [submit, handleSubmit] = React.useState("")
    console.log(submit)

    return (
        <>
            <header>
                <h1>Fruit delivery service</h1>
            </header>
            <main>
                <section>
                    <FruitBasketItems
                        icon="🍓"
                        name="Strawberry"
                        amount={strawberry}
                        add={() => {
                            setStrawberry(strawberry + 1)
                        }}
                        sub={() => {
                            setStrawberry(strawberry - 1)
                        }}
                    />
                    <FruitBasketItems
                        icon="🍌"
                        name="Bananas"
                        amount={bananas}
                        add={() => {
                            setBananas(bananas + 1)
                        }}
                        sub={() => {
                            setBananas(bananas - 1)
                        }}
                    />
                    <FruitBasketItems
                        icon="🍏"
                        name="Appel"
                        amount={appel}
                        add={() => {
                            setAppel(appel + 1)
                        }}
                        sub={() => {
                            setAppel(appel - 1)
                        }}
                    />
                    <FruitBasketItems
                        icon="🥝"
                        name="Kiwi"
                        amount={kiwi}
                        add={() => {
                            setKiwi(kiwi + 1)
                        }}
                        sub={() => {
                            setKiwi(kiwi - 1)
                        }}
                    />

                    <button
                        type="button"
                        id="reset-button"
                        onClick={() => {
                            setStrawberry(0)
                            setBananas(0)
                            setAppel(0)
                            setKiwi(0)
                        }}
                    >Reset
                    </button>
                </section>

                <section>
                    <form onSubmit={() => {
                        handleSubmit([
                            firstName,
                            lastName,
                            age,
                            zipCode,
                            frequency,
                            deliveryTime,
                            comment,
                            terms,
                            strawberry,
                            bananas,
                            appel,
                            kiwi])
                    }}>
                        <fieldset>
                            <UserForm
                                label="firstname"
                                type="text"
                                name="firstname"
                                placeholder="First name"
                                value={firstName}
                                change={(e) => {
                                    setFirstName(e.target.value)
                                }}
                            />
                            <UserForm
                                label="lastname"
                                type="text"
                                name="lastname"
                                placeholder="Last name"
                                value={lastName}
                                change={(e) => {
                                    setLastName(e.target.value)
                                }}
                            />
                            <UserForm
                                label="age"
                                type="number"
                                name="age"
                                placeholder="Age"
                                value={age}
                                change={(e) => {
                                    setAge(e.target.value)
                                }}
                            />
                            <UserForm
                                label="zipCode"
                                type="text"
                                name="zipCode"
                                placeholder="Zip code"
                                value={zipCode}
                                change={(e) => {
                                    setZipCode(e.target.value)
                                }}
                            />

                            <div className="frequency-box">
                                <label htmlFor="frequency">Frequency</label>
                                <select
                                    name="frequency"
                                    value={frequency}
                                    onChange={(e) => {
                                        setFrequency(e.target.value)
                                    }}
                                >
                                    <option value="every day">Every day</option>
                                    <option value="every week">Every week</option>
                                    <option value="every month">Every month</option>
                                </select>
                            </div>

                            <div className="delivery-box">

                                <label htmlFor="morning">Morning</label>
                                <input
                                    type="radio"
                                    name="delivery-time"
                                    value="Morning"
                                    onChange={(e) => {
                                        setDeliveryTime(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="delivery-box">
                                <label htmlFor="night">Night</label>
                                <input
                                    type="radio"
                                    name="delivery-time"
                                    value="Night"
                                    onChange={(e) => {
                                        setDeliveryTime(e.target.value)
                                    }}
                                />
                            </div>

                            <label htmlFor="comments"></label>
                            <textarea
                                name="comments"
                                rows="5" cols="20"
                                onChange={(e) => {
                                    setComment(e.target.value)
                                }}
                                placeholder="Comments"
                            />

                            <div className="terms-box">
                                <label htmlFor="terms">Terms accepted</label>
                                <input
                                    id="terms"
                                    type="checkbox"
                                    onChange={(e) => {
                                        setTerms(e.target.value)
                                    }}
                                />
                            </div>

                            <button type="submit">Send</button>
                        </fieldset>
                    </form>
                </section>
            </main>
        </>
    );
}