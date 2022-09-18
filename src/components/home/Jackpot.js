import React, { useState, useEffect } from 'react'

import './jackpot.css'


const Jackpot = ({ id, owned, close, expires }) => {

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [input, setInput] = useState()
    const [realBet, setRealBet] = useState()
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(100000)


    useEffect(() => {
        win()
    }, [ring3])


    function row1() {

        if (!spin) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />

                </>
            )
        } else if (spin && ring1 === undefined) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringMoving" />

                </>
            )
        } else if (ring1 >= 1 && ring1 <= 50) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring1 > 50 && ring1 <= 75) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring1 > 95 && ring1 <= 100) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                </>
            )
        }
    }

    function row2() {

        if (!spin) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                </>
            )
        } else if (spin && ring2 === undefined) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringMoving" />
                </>
            )
        } else if (ring2 >= 1 && ring2 <= 50) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring2 > 75 && ring2 <= 95) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring2 > 95 && ring2 <= 100) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                </>
            )
        }

    }

    function row3() {

        if (!spin) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                </>
            )
        } else if (spin && ring3 === undefined) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/5.jpeg' className="ringMoving" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/6.jpeg' className="ringMoving" />
                </>
            )
        } else if (ring3 >= 1 && ring3 <= 50) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring3 > 75 && ring3 <= 95) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                </>
            )
        } else if (ring3 > 95 && ring3 <= 100) {
            return (
                <>
                    <img src='https://rickandmortyapi.com/api/character/avatar/3.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/4.jpeg' className="ringEnd" />
                    <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="ringEnd" />
                </>
            )
        }
    }

    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
            setPrice(1)
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(2)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(3)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(4)
        } else {
            setPrice(0)
        }
    }

    function rand() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1))
        setTimeout(function () { setRing2(Math.floor(Math.random() * (100 - 1) + 1)) }, 1000)
        setTimeout(function () { setRing3(Math.floor(Math.random() * (100 - 1) + 1)) }, 2000)
    }

    function play() {
        if (ring3 > 1 || !spin) {
            if (input <= balance && input >= 1) {
                setRealBet(input)
                setSpin(true)
                setRing1()
                setRing2()
                setRing3()
                setBalance(balance - input)
                setJackpot(jackpot + (input / 2))
                setTimeout(function () {
                    rand()
                }, 2000)
            } else {
                setPrice(10)
            }

        }
    }


    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
            setPrice(1)
            setBalance(balance + (balance * 15))
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(2)
            setBalance(balance + (balance * 20))
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(3)
            setBalance(balance + (balance * 25))
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(4)
            setBalance(balance + jackpot)
            setJackpot(0)
        } else {
            setPrice(0)
        }
    }

    function premio() {
        if (price === 1 && ring3 > 1) {
            return (
                <p className="priceInd">{"X15 You've won " + (realBet * 15) + "€!"}</p>
            )
        } else if (price === 2 && ring3 > 1) {
            return (
                <p className="priceInd">{"X20 You've won " + (realBet * 20) + "€!"}</p>
            )
        } else if (price === 3 && ring3 > 1) {
            return (
                <p className="priceInd">{"X25 You've won " + (realBet * 25) + "€!"}</p>
            )
        } else if (price === 4 && ring3 > 1) {
            return (
                <p className="priceInd">{"Jackpot! You've won: " + (jackpot) + "€!"}</p>
            )
        } else if (price === 0 && ring3 > 1) {
            return (
                <p className="priceInd">😧 ¡So close! But no luck...</p>
            )
        } else if (price === 10) {
            return (
                <p className="priceInd">🥶 <span style={{ color: `red` }}>Not enough funds</span> </p>
            )
        }
    }

    function numChecker(e) {
        const value = e.target.value;
        const regex = /^[0-9]+$/;
        if (value.match(regex) && parseInt(value) >= 0 || value === "") {
            setInput(value);
        }
    }






    return (
        <div className="fullSlot">            
            <h1 className="price">{"Jackpot: " + jackpot + "€"}</h1>
            <div className="slot">
                <div className="row__jp">
                    {row1()}
                </div>
                <div className="row__jp">
                    {row2()}
                </div>
                <div className="row__jp">
                    {row3()}
                </div>
            </div>
            <h1 className="price">
                {premio()}
            </h1>
            <div className="slotFoot">
                <input value={input} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder="0€"></input>
                <button className="spinButton" onClick={() => play()}>Spin</button>
            </div>
            <h1 className="price">{"Available cash: " + Math.round((balance * 100)) / 100 + "€"}</h1>
            <button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Add 1000 €</button>
        </div>

    )
}

export default Jackpot;