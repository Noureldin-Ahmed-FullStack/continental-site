export interface SocialPost{
    content?:string
    comments? : Comments[]
    createdBy?:string
    createdAt?:string
    userPFP?:string
    image?:string
}
export interface Comments{
    userPFP:string
    content: string
    createdBy:string
    createdAt:string
}