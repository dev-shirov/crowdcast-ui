import { getRecommendationFromAPI } from "@/api/crowdcast";
import { useLocationStore } from "@/store/locationStore";

export function useLocationService() {
  async function recommend() {
    // pass data from forms here, build parameters here
    // params = {
    //   date: '',
    //   location: '',
    //   activity: ''
    // }
    return await getRecommendationFromAPI()
  }

  return {
    recommend
  }
}