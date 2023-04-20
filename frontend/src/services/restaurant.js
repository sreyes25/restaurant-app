import http from "../http-commons";

export class RestaurantDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
      }
    
      get(id) {
        return http.get(`/id/${id}`);
      }
    
      find(query, by = "name", page = 0) {
        return http.get(`?${by}=${query}&page=${page}`);
      } 
    
      createReview(data) {
        return http.post("/review", data);
      }
    
      updateReview(data) {
        return http.put("/review", data);
      } 
    
      deleteReview = (id, userId) => {
        http.delete(`/review?id=${id}`, { data: { user_id: userId } })
          .then(response => {
            console.log(response.data);
            // update state or perform other actions as needed
          })
          .catch(error => {
            console.error(`Unable to delete review: ${error}`);
            // handle error as needed
          });
      };
      
      getCuisines(id) {
        return http.get(`/cuisines`);
      }
}
export default new RestaurantDataService();
