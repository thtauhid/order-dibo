const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
	const client = new faunadb.Client({
		secret: process.env.FAUNA_SECRET,
	})

	const [riderId, currentStatus] = JSON.parse(event.body)

	return client
		.query(
			q.Paginate(
				q.Match(q.Ref('indexes/getOrdersByRiderIdAndStatus'), [
					riderId,
					currentStatus,
				])
			)
		)

		.then((res) => {
			const OrderRefs = res.data
			const Query = OrderRefs.map((ref) => {
				return q.Get(ref)
			})

			return client
				.query(Query)

				.then((res) => {
					return {
						statusCode: 200,
						body: JSON.stringify(res),
					}
				})
		})
}
