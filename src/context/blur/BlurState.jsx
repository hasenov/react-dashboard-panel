import React, { useContext, useReducer } from "react";
import BlurContext from "./blurContext";
import blurReducer from "./blurReducer";
import { SET_BLUR, REMOVE_BLUR } from "../types";

export const useBlur = () => {
	const { blur } = useContext(BlurContext);
	return [blur];
};

const BlurState = (props) => {
	const initialState = false;

	const [state, dispatch] = useReducer(blurReducer, initialState);

	// Set Alert
	const setBlur = () => {
		dispatch({
			type: SET_BLUR,
		});
	};

	const removeBlur = () => {
		dispatch({
			type: REMOVE_BLUR,
		});
	};

	return (
		<BlurContext.Provider
			value={{
				blur: state,
				setBlur,
				removeBlur,
			}}
		>
			{props.children}
		</BlurContext.Provider>
	);
};

export default BlurState;
