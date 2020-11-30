const getItems = () => {
	return fetch(
		'https://order-dibo-api.netlify.app/.netlify/functions/getItems'
	).then((res) => {
		return res.json()
	})
}

const createOrder = (data) => {
	return fetch(
		'https://order-dibo-api.netlify.app/.netlify/functions/createOrder',
		{
			body: JSON.stringify(data),
			method: 'POST',
		}
	).then((res) => {
		return res.json()
	})
}

const getSingleOrder = (id) => {
	return fetch(
		'https://order-dibo-api.netlify.app/.netlify/functions/getSingleOrder',
		{
			body: JSON.stringify(id),
			method: 'POST',
		}
	).then((res) => {
		return res.json()
	})
}

const getOrdersByUserId = (id) => {
	return fetch(
		'https://order-dibo-api.netlify.app/.netlify/functions/getOrdersByUserId',
		{
			body: JSON.stringify(id),
			method: 'POST',
		}
	).then((res) => {
		return res.json()
	})
}

const api = {
	getItems,
	createOrder,
	getSingleOrder,
	getOrdersByUserId,
}

export default api
