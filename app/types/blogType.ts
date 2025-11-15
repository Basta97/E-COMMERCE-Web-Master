export interface Blog {
    _id: string
    title: string
    content: string
    author: string
    Tags: string
    Image: {
        url: string
        publicId: string
    }
    createdAt: string
    updatedAt: string
    publishedAt: string
    __v: number
}
export interface BlogResponse {
    data: Blog[]
    currentPage: number
    totalPages: number
}
