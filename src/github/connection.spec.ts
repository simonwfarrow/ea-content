import 'mocha';
import {expect} from "chai";
import {getGitHubGraphQLConn} from "./connection.js";

describe('The connection class', function () {
    it('returns a graphql connection', function () {
        let conn = getGitHubGraphQLConn('https://api.github.com', 'Bearer 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');
        expect(conn).not.null;
    })
})
