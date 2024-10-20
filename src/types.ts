export interface SocialPost{
    content?:string
    comments? : Comments[]
    createdBy?:UserData
    createdAt?:string
    userPFP?:string
    image?:string
    _id?:string
}
export interface UserData{
    email:string
    _id:string
    name:string
}
export interface Comments{
    userPFP:string
    content: string
    createdBy:string
    createdAt:string
}