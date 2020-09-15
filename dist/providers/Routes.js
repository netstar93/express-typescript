"use strict";
/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const Locals_1 = require("./Locals");
const Log_1 = require("../middlewares/Log");
const Web_1 = require("./../routes/Web");
const Api_1 = require("./../routes/Api");
const GraphQL_1 = require("./../routes/GraphQL");
class Routes {
    mountWeb(_express) {
        Log_1.default.info('Routes :: Mounting Web Routes...');
        return _express.use('/', Web_1.default);
    }
    mountApi(_express) {
        const { apiPrefix } = Locals_1.default.config();
        Log_1.default.info('Routes :: Mounting API Routes...');
        return _express.use(`/${apiPrefix}`, Api_1.default);
    }
    mountGraphQL(_express) {
        const { graphqlPrefix, isGraphQLEnabled } = Locals_1.default.config();
        if (isGraphQLEnabled) {
            Log_1.default.info(`Routes :: Mounting GraphQL Routes on /${graphqlPrefix}...`);
            const server = new apollo_server_express_1.ApolloServer({
                schema: GraphQL_1.schema,
                context: ({ req, res }) => {
                    return {
                        req, res
                    };
                }
            });
            server.applyMiddleware({ app: _express, path: `/${graphqlPrefix}` });
        }
        return _express;
    }
}
exports.default = new Routes;
//# sourceMappingURL=Routes.js.map