"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
	type User {
		id: ID!
		email: String
	}

	type Query {		
		register (email: String, password: String, confirmPassword: String): User
	}

	type Mutation {
		login (email: String, password: String): User
	}
`;
//# sourceMappingURL=typeDefs.js.map