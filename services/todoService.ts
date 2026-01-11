import axiosInstance from "@/lib/api"

export const postTodos = async (name:string) => {
    const response = await axiosInstance.post('/items', {name})
    return response.data
}

export const getTodos = async () => {
    const response = await axiosInstance.get('/items')
    return response.data;
}

export const patchTodos = async (itemId:number, data: {isCompleted?: boolean; name?:string; memeo?:string; imageUrl?: string}) => {
    const response = await axiosInstance.patch(`/items/${itemId}`, data)
    return response.data;
}

export const getDetailTodos = async (itemId:string) => {
    const response = await axiosInstance.get(`/items/${itemId}`)
    return response.data;
}