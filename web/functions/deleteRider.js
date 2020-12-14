const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
	const client = new faunadb.Client({
		secret: process.env.FAUNA_SECRET,
	})
	const id = JSON.parse(event.body)
	return client
		.query(q.Delete(q.Ref(q.Collection('Riders'), id)))
		.then((res) => {
			return {
				statusCode: 200,
				body: JSON.stringify(res),
			}
		})

		.catch((err) => {
			console.log(err)
		})
}
