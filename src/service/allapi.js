import { commonRequest } from "./CommonReq";
import { BASE_URL } from "./baseUrl";


// Add video
// difine function for add video

export const addVideo= async(body)=>{
   return await commonRequest("POST",`${BASE_URL}/videos`,body)
}
// get video

//define function for grt video  back end

  export const getVideo=async()=>{
return await commonRequest("GET",`${BASE_URL}/videos`,"")

  }
  
//   Ddelete video card


export  const deleteVideo=async(id)=>{

  return await  commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// add categery

// define a function add category

export const addCategory=async(body)=>{
  return await commonRequest("POST",`${BASE_URL}/categories`,body)
}
// /to get category
export const getAllCategory=async()=>{
  return await commonRequest("GET",`${BASE_URL}/categories`,"")
  
    }
    // to delete category
    

    export  const deleteCategory=async(id)=>{

      return await  commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
    }
// GET HISTORY

export const getHistory=async()=>{

 return await commonRequest("GET",`${BASE_URL}/watchHistory`,"")
}
// add history
    
export const addHistory=async(body)=>{

  return await commonRequest("POST",`${BASE_URL}/watchHistory`,body)
 }

//  category updation
// get single video get

export const getVideos=async(id)=>{
  return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
  
    }

    // to update drage detail in category all videos[]

    
export const updateCategory=async(id,body)=>{
  return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
  
    }