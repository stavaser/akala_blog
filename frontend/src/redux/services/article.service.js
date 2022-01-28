import http from '../helpers/apiCient';

class ArticleService {
  getAll(category, section) {
    if (section) {
      return http.get(`/api/article/?category=${category}&section=${section}`);
    }
    return http.get(`/api/article/?category=${category}`);
  }
  getInfo(id) {
    return http.get(`/api/article/?article_id=${id}`);
  }
  getAllPodcasts() {
    return http.get(`/api/podcasts/`);
  }
}

export default new ArticleService();
