import {graphql} from '@octokit/graphql';

export function getGitHubGraphQLConn(url: string, token: string){
    return graphql.defaults({
        baseUrl: url,
        headers: {
            authorization: token,
        },
    });
}
