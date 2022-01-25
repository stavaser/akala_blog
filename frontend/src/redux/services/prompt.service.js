import http from '../helpers/apiCient';

class PromptService {
  getAll() {
    return http.get(`/api/prompts/`);
  }
}

export default new PromptService();
