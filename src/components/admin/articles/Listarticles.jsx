import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';


const Listarticles = () => {
  
  const[articles,setArticles]=useState([])
  const[isloading,setIsloading]=useState(true)

  const fetcharticles=async()=>{
   //https://ecommercebackessat.vercel.app/api/articles"
    try {
        const res=await axios.get("https://ecommercebackessat.vercel.app/api/articles")
        setArticles(res.data)  
        setIsloading(false)
      }catch(error)
      {console.log(error)}

  }
  useEffect(()=>{fetcharticles(),[]})

  if (isloading)
  {
    return (
      <>
      <center><ReactLoading type="spokes" color="blue" height={300} width={200} /></center>
      </>
    )
  }

  const handledelete=async(id)=>
  {
    window.confirm("ya weldi mthabet")
    try {
      await axios.delete(`https://ecommercebackessat.vercel.app/api/articles/${id}`)
      setArticles(articles.filter(article=>article._id!=id))
    }catch(error)
    {console.log(error)}

  }
  
  
  return (
    <div>
      <h1>List Articles</h1>
          <td>
      <Link to="/articles/add"><button className="btn btn-success add-button">
        <i className="fa-solid fa-square-plus"></i> Nouveau
      </button></Link>
    </td>

      <button onClick={()=>fetcharticles()} > Afficher </button>

      <table className='table table-stripes'>
        <thead>
          <tr>
            <th>Réferance</th>
            <th>Désignation</th>
            <th>Marque</th>
            <th>Stock</th>
            <th>Prix</th>
            <th>Image</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {articles.map((art, index) => (
          <tr key={index}>
            <td>{art.reference}</td>
            <td>{art.designation}</td>
            <td>{art.marque}</td>
            <td>{art.qtestock}</td>
            <td>{art.prix}</td>
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>
            <Link to={`/articles/edit/${art._id}`}>
          <button className="btn btn-primary edit-button">
            <i className="fa-solid fa-pen-to-square"></i> Modifier
          </button></Link>
        </td>
        <td>
          <button className="btn btn-danger delete-button" onClick={(e)=>handledelete(art._id)}>
            <i className="fa-solid fa-trash-can"></i> Supprimer
          </button>
        </td>

          
          

          
          
          </tr>
        ))
            
          }
        </tbody>

      </table>


    </div>
  )
}

export default Listarticles
