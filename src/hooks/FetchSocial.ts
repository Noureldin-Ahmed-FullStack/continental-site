import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SocialPost } from '../types'
const BaseURL = import.meta.env.VITE_BASE_URL;
const fetchSocialPosts = async (pageNumber: number) => {
    try {
        const response = await axios.get(BaseURL + "post/" + pageNumber);
        if (response) {
            return response.data as SocialPost[];
        }
        return []
    } catch (error) {
        console.error(error);
        return []
    }

};
const fetchSocialPostDetails = async (SocialPostId: string) => {
    try {
        const response = await axios.get(`${BaseURL}lookup.php?i=${SocialPostId}`);
        console.log(response.data);

        return response.data as SocialPost;
    } catch (error) {
        console.error(error);
        return null
    }

};

export const useSocialPosts = (pageNumber: number) => {
    return useQuery({
        queryKey: ['SocialPosts', pageNumber],
        queryFn: () => fetchSocialPosts(pageNumber),
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: false, // Do not refetch on window focus
    });
};

export const useSocialPostDetails = (SocialPostId: string) => {
    return useQuery({
        queryKey: ['SocialPostDetails', SocialPostId],
        queryFn: () => fetchSocialPostDetails(SocialPostId),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });
};