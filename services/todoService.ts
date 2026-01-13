import axiosInstance from "@/lib/api"

export const postTodos = async (name:string) => {
    const response = await axiosInstance.post('/items', {name})
    return response.data
}

export const getTodos = async () => {
    const response = await axiosInstance.get('/items')
    return response.data;
}

export const patchTodos = async (itemId:number, data: {isCompleted?: boolean; name?:string; memo?:string; imageUrl?: string}) => {
    const response = await axiosInstance.patch(`/items/${itemId}`, data)
    return response.data;
}

export const getDetailTodos = async (itemId:number) => {
    const response = await axiosInstance.get(`/items/${itemId}`)
    return response.data;
}

export const postImage = async (file: File) => {
    const formData = new FormData()
    formData.append('image', file);

    const response = await axiosInstance.post('/images/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
    return response.data;
}

export const deleteTodos = async (itemId:number) => {
    const response = await axiosInstance.delete(`/items/${itemId}`)
    return response.data;
}