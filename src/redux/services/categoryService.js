import axios from "axios"
import { BACKEND_URL } from "./Helper"

const API_URL = `${BACKEND_URL}/category/`


const createCategory= async(data)=>{
    const response= await axios.post(API_URL, data)

    return response.data
}



const getAllCategory= async()=>{
    const response= await axios.get(API_URL)
    return response.data
}


const deleteCategory= async(id)=>{
    const response= await axios.delete(API_URL +id)
    return response.data

}


 const CategoryService= {createCategory, deleteCategory, getAllCategory}

 export default CategoryService