import store from "store";

export const GetAuth = () => {
	let userdata = store.get("userdata");

	return userdata || false;
};
