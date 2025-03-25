import { getForecast } from "@/api/crowdcast";

export function useCrowdcast() {
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