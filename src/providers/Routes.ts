/**
 * Define all your routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import Locals from './Locals';
import Log from '../middlewares/Log';

import webRouter from './../routes/Web';
import apiRouter from './../routes/Api';
import { schema } from './../routes/GraphQL';

class Routes {
	public mountWeb(_express: Application): Application {
		Log.info('Routes :: Mounting Web Routes...');

		return _express.use('/', webRouter);
	}

	public mountApi(_express: Application): Application {
		const { apiPrefix } = Locals.config();
		Log.info('Routes :: Mounting API Routes...');

		return _express.use(`/${apiPrefix}`, apiRouter);
	}

	public mountGraphQL(_express: Application): Application {
		const { graphqlPrefix, isGraphQLEnabled } = Locals.config();

		if (isGraphQLEnabled) {
			Log.info(`Routes :: Mounting GraphQL Routes on /${graphqlPrefix}...`);

			const server = new ApolloServer({ 
				schema: schema,
				context: ({ req, res }) => {
					return {
						req, res
					}
				}
			});
			server.applyMiddleware({ app: _express, path: `/${graphqlPrefix}`});
		}

		return _express;
	}
}

export default new Routes;
