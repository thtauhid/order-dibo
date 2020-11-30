const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
	const client = new faunadb.Client({
		secret: process.env.FAUNA_SECRET,
	})

	const [id, riderId] = JSON.parse(event.body)
	const data = { riderId }

	return client
		.query(
			q.Update(q.Ref(q.Collection('Orders'), id), {
				data,
			})
		)
		.then((res) => {
			return {
				statusCode: 200,
				body: JSON.stringify(res),
			}
		})
		.catch((err) => {
			return {
				statusCode: 400,
				body: JSON.stringify(res),
			}
		})
}
