export interface SinglePost {
    id: number
    title: string
    date: string
    excerpt: string
    thumb: string
    url: string
}


export interface FetchPostsReturn {
    data: SinglePost[] 
    total: number
}