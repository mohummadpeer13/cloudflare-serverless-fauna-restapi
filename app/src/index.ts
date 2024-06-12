import { Client, fql } from "fauna";

export interface Env {
	FAUNA_SECRET: string;
}
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

		const client = new Client({
			secret: env.FAUNA_SECRET,
		});

		switch (request.method) {
			case 'GET':
				try {
					const dbresponse = await client.query(
						fql`Users.all()`
					)
					return new Response(JSON.stringify(dbresponse.data), { status: 200 })
				} catch (error) {
					return new Response(JSON.stringify(error), { status: 500 })
				}

			case 'POST':
				try {
					const userData = await request.json()
					const dbresponse = await client.query(fql`
						Users.create(${userData as any})
						`)
					return new Response(JSON.stringify({ message: "user created" }), { status: 201 })
				} catch (error) {
					return new Response(JSON.stringify(error), { status: 200 })
				}

			case 'PUT':
				try {
					const url = new URL(request.url)
					const id = url.pathname.split('/').pop()
					const userData = await request.json()
					const dbresponse = await client.query(fql`
						let findUser = Users.byId(${id as string})
						findUser!.update(${userData as any})
						`)
					return new Response(JSON.stringify({ message: "user update" }), { status: 200 })
				} catch (error) {
					return new Response(JSON.stringify(error), { status: 200 })
				}

			case 'DELETE':
				try {
					const url = new URL(request.url)
					const id = url.pathname.split('/').pop()
					const dbresponse = await client.query(fql`
						let findUser = Users.byId(${id as string})
						findUser!.delete()
						`)
					return new Response(JSON.stringify({ message: "user delete" }), { status: 200 })
				} catch (error) {
					return new Response(JSON.stringify(error), { status: 200 })
				}

			default:
				return new Response('This is the default response!', { status: 404 })
		}
	},
};
