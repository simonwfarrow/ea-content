import 'mocha';
import {expect} from "chai";
import {getGitHubGraphQLConn} from "./connection.js";
import * as dotenv from 'dotenv';
dotenv.config()

describe('The connection class', function () {
    it('returns a graphql connection', function () {
        let conn = getGitHubGraphQLConn(process.env.HOST || 'https://api.github.com' ,`Bearer ${process.env.TOKEN}`);
        expect(conn).not.null;
    })
})
