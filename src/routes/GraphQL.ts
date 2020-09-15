import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from "./TypeDefs";
import { resolvers } from "./Resolvers";

export const schema: GraphQLSchema = makeExecutableSchema({
	resolvers,
	typeDefs
});
