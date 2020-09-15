import { validationResult } from "express-validator";
import User from "./../models/User";

export const resolvers = {
	Query: {		
		register: async (_, args) => {
			return {email: 1};
		}
	},
	Mutation: {
		login: async (_, args) => {
			validationResult(args)
		}
	}
};
