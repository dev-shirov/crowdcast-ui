import axiosInstance from ".";

export async function getRecommendationFromAPI(body) {
  const { data } = await axiosInstance.post('/recommendation', body)
  return data
}

export async function getPredictionFromAPI(params) {
  const { data } = await axiosInstance.get('/predictions', params)
  return data
}