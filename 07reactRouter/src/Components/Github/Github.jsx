import React, {useState, useEffect} from 'react'

function Github(){
    /**
     * CONCEPT 1: State Management (useState)
     * useState is used to create 'reactive' variables. 
     * 'data' holds the current value, and 'setData' is the function used to update it.
     * Initialized with an empty array [], though since the GitHub API returns an 
     * object, {} might be more technically accurate here.
     */
    const [data, setData] = useState([])

    /**
     * CONCEPT 2: Side Effects (useEffect)
     * useEffect allows you to perform actions that happen outside the 
     * component's rendering logic (like API calls).
     * * The Dependency Array []: 
     * The empty brackets at the end mean this effect runs ONLY ONCE 
     * when the component "mounts" (first appears on the screen).
     */
    useEffect(() => {
        /**
         * CONCEPT 3: Fetch API & Promises
         * fetch(): Sends an HTTP request to the GitHub API.
         * .then(response => response.json()): Converts the raw response into a JSON object.
         * .then(data => setData(data)): Updates our state with the actual user info.
         * Once setData is called, React automatically re-renders the component to show the new data.
         */
        fetch('https://api.github.com/users/Shrayash-hub')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

    return (
        /**
         * CONCEPT 4: Conditional Rendering & Data Binding
         * We use {data.property} to bind the API results to our HTML.
         * Note: On the very first render, 'data' is empty, so these values 
         * will be undefined until the fetch finishes.
         */
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div>Github Info</div>
            <div>Name: {data.name}</div>
            <div>Followers: {data.followers}</div>
            <div>Following: {data.following}</div>
            <div>Public Repos: {data.public_repos}</div>
            <div>Location: {data.location}</div>
            
            {/* CONCEPT 5: Dynamic Attribute Binding */}
            {/* The 'src' attribute is linked to the data object's avatar_url property */}
            <img src={data.avatar_url} alt="git picture" width={300}></img>
        </div>
    )
}

export default Github