"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const TypeDefs_1 = require("./TypeDefs");
const Resolvers_1 = require("./Resolvers");
exports.schema = graphql_tools_1.makeExecutableSchema({
    resolvers: Resolvers_1.resolvers,
    typeDefs: TypeDefs_1.typeDefs
});
//# sourceMappingURL=GraphQL.js.map