import React from 'react'
import { useEffect } from 'react'

const Home = () => {    

    useEffect(()=> {
        window.scroll(0,0)
    },[]) 

    // scrollun kaymasını engeller


    return (
        <div>
            <h2>Home Page</h2>
        </div>
    )
}

export default Home
