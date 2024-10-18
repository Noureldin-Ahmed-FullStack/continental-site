export interface SocialPost{
    content?:string
    comments? : Comments[]
    createdBy?:string
    CreatedAt?:string
    userPFP?:string
    image?:string
}
export interface Comments{
    userPFP:string
    content: string
    createdBy:string
    CreatedAt:string
}