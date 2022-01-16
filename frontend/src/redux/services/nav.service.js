import http from '../helpers/apiCient';

class NavService {
  getCategories() {
    return http.get(`/api/category/`);
  }
  getSections() {
    return http.get(`/api/article/`);
  }
}

export default new NavService();
