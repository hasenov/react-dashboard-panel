import { SET_BLUR, REMOVE_BLUR } from "../types";

const blurReducer = (state, action) => {
	switch (action.type) {
		case SET_BLUR:
			return true;
		case REMOVE_BLUR:
			return false;
		default:
			return state;
	}
};

export default blurReducer;
