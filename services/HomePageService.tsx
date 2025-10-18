import { HomePage } from "@/types/homeTypes";
import { apiClient } from "./api";

export const HomePageService = {
    
     async getHomePageData(lang: string): Promise<HomePage> {

        try {
          const response = await apiClient.get('/home', {
            params: {
                locale: lang,
              'populate[hero][populate]': '*',
  'populate[CTA][populate]': '*',
  'populate[Excellence][populate]': '*',
  'populate[features][populate][card][populate]': '*',
            },
          });
      
          return response.data.data;
        } catch (error) {
          console.error('Error fetching home page data');
          throw error;
        }
      }
      
}