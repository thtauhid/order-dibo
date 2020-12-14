const api_domain = 'ondemand.tauhid.xyz' // write without https:// or www

const getSingleOrder = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/getSingleOrder`, {
		body: JSON.stringify(id),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const getOrdersByCurrentStatus = (status) => {
	return fetch(
		`https://${api_domain}/.netlify/functions/getOrdersByCurrentStatus`,
		{
			body: JSON.stringify(status),
			method: 'POST',
		}
	).then((res) => {
		return res.json()
	})
}

const createItem = (data) => {
	return fetch(`https://${api_domain}/.netlify/functions/createItem`, {
		body: JSON.stringify(data),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const getItems = () => {
	return fetch(`https://${api_domain}/.netlify/functions/getItems`).then(
		(res) => {
			return res.json()
		}
	)
}

const getSingleItem = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/getSingleItem`, {
		body: JSON.stringify(id),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const updateItem = (id, data) => {
	return fetch(`https://${api_domain}/.netlify/functions/updateItem`, {
		body: JSON.stringify([id, data]),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const deleteItem = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/deleteItem`, {
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

const addRider = (data) => {
	return fetch(`https://${api_domain}/.netlify/functions/addRider`, {
		body: JSON.stringify(data),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const getRiders = () => {
	return fetch(`https://${api_domain}/.netlify/functions/getRiders`).then(
		(res) => {
			return res.json()
		}
	)
}

const getSingleRider = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/getSingleRider`, {
		body: JSON.stringify(id),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const updateRider = (id, data) => {
	return fetch(`https://${api_domain}/.netlify/functions/updateRider`, {
		body: JSON.stringify([id, data]),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const deleteRider = (id) => {
	return fetch(`https://${api_domain}/.netlify/functions/deleteRider`, {
		body: JSON.stringify(id),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const assignRider = (id, riderId) => {
	return fetch(`https://${api_domain}/.netlify/functions/assignRider`, {
		body: JSON.stringify([id, riderId]),
		method: 'POST',
	}).then((res) => {
		return res.json()
	})
}

const api = {
	getSingleOrder,
	getOrdersByCurrentStatus,
	createItem,
	getItems,
	getSingleItem,
	updateItem,
	deleteItem,
	updateOrder,
	addRider,
	getRiders,
	getSingleRider,
	updateRider,
	deleteRider,
	assignRider,
}

export default api
