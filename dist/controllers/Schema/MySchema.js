"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema(`
	type Query {
		hello: String
	}
`);
exports.root = {
    hello: () => 'Hello World!'
};
exports.default = exports.schema;
//# sourceMappingURL=MySchema.js.map