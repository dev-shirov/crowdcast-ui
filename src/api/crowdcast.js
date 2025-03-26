import axiosInstance from ".";

export async function getRecommendationFromAPI(body) {
  console.log(body)
  const { data } = await axiosInstance.post('/recommendation', body)
  return data
}

export async function getPredictionFromAPI() {
  const { data } = await axiosInstance.get('/predictions')
  return data
}