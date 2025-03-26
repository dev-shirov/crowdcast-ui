import { getRecommendationFromAPI } from "@/api/crowdcast";

export function useLocationService() {
  async function recommend(location, month, activity) {
    // pass data from forms here, build parameters here
    var data = {
      month: month,
      location: location,
      activity: activity
    }
    return await getRecommendationFromAPI(data)
  }

  async function predict(location, month) {
    // pass data from forms here, build parameters here
    var data = {
      month: month,
      location: location
    }
    return await getPredictionFromAPI(data)
  }

  return {
    recommend
  }
}