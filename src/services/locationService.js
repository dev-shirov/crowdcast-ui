import { getRecommendationFromAPI } from "@/api/crowdcast";
import { useLocationStore } from "@/store/locationStore";

export function useLocationService() {
  async function recommend(location, date, activity) {
    // pass data from forms here, build parameters here
    var data = {
      month: date,
      location: location,
      activity: activity
    }
    return await getRecommendationFromAPI(data)
  }

  return {
    recommend
  }
}