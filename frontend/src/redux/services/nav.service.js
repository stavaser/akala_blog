import http from '../helpers/apiCient';

class NavService {
  getCategories() {
    return http.get(`/api/category/`);
  }
}

export default new NavService();
