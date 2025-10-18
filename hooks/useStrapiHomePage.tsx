import {HomePageService } from '@/services/HomePageService';
import { HomePage } from '@/types/homeTypes';
import { useQuery } from '@tanstack/react-query';

export const useStrapiHomePage = (lang:string) => {
    return useQuery<HomePage, Error>({
        queryKey: ['homePage'],
        queryFn: () => HomePageService.getHomePageData(lang),
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    });
};