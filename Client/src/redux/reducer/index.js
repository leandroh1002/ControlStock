import { GET_PRODUCTS} from "../actions/action-types";

const initialState = {
    allProducts: [],
    filteredCountries: [],
    filteredActivities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {


        case GET_PRODUCTS:
            return {...state,
            allProducts: payload,
        }
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;
