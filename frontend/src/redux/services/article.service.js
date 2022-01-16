import http from '../helpers/apiCient';

class ArticleService {
  getAll(category_id) {
    return http.get(`/api/article/?category_id=${category_id}`);
  }
  getInfo(id) {
    return http.get(`/api/article/?article_id=${id}`);
  }
}

export default new ArticleService();
