import axiosInstance from ".";

export async function getRecommendationFromAPI() {
  const { data } = await axiosInstance.get('/recommend')
  // we can plug the parameters here:
  // await axiosInstance.get('/recommend', {
  //   params: param
  // })
  return data
}