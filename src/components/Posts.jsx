import React, { useState } from 'react'

const Posts = () => {

    const[post,setpost]=useState([])
    const[input,setinput]=useState('')
    const[drp,setdrp]=useState('id')

    // const post = () => {

    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then(response => response.json())
    //     // .then(json =>setpst(json) )
    // }

    const pst = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setpost(json))

        // console.log(pst)

    }
    
    



    return(

        <div>
            <button id='post' onClick={pst} >Posts</button><br/>
            <input type='text' name='search' placeholder='search' onChange={e=>{
                setinput(e.target.value)
            }}/>
            <select onChange={e=>{
                setdrp(e.target.value)
            }}>
                <option disabled selected>selected</option>
                <option value='userId'>user id</option>
                <option value='id'>id</option>
                <option value='title'>title</option>
                <option value='body'>body</option>
            </select>

        <table>
            <tr>
                <td>user id</td>
                <td> id</td>
                <td>title</td>
                <td>body</td>
            </tr>

            {
                post.filter((ps)=>{
                    if(ps[drp].toStsring().includes(input))
                    return ps;
                }) 
                .map((item)=>{
                    return (
                        <tr>
                            {" "}
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    )
                })
            }
        </table>l
        </div>


    )
}

export default Posts