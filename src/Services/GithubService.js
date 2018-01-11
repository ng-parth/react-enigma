import httpService from './HttpService';

class GithubService {

    getUserDetails = username => httpService.get(`https://api.github.com/users/${username}`);

    getUserRepos = username => httpService.get(`https://api.github.com/users/${username}/repos`);
}

let githubService = new GithubService();

export default githubService;

