import { gql } from "apollo-server-express";

import User from "./../models/User";

export const typeDefs = gql`
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
