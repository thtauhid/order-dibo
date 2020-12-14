const api_domain = 'ondemand.tauhid.xyz' // write without https:// or www

const getOrdersByRiderIdAndStatus = (riderId, currentStatus) => {
	return fetch(
		`https://${api_domain}/.netlify/functions/getOrdersByRiderIdAndStatus`,
		{
			body: JSON.stringify([riderId, currentStatus]),
			method: 'POST',
		}
	).then((res) => {
		return res.json()
	})
}

const getSingleOrder = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/getSingleOrder`, {
		body: JSON.stringify(id),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const updateOrder = (id, currentStatus, update) => {
	return fetch(`https://${api_domain}/.netlify/functions/updateOrder`, {
		body: JSON.stringify([id, currentStatus, update]),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const api = {
	getOrdersByRiderIdAndStatus,
	getSingleOrder,
	updateOrder,
}

export default api
