import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct: [],
    
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {
    const API = "https://api.pujakaitem.com/api/products";

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: "SET_API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "SHOW_ERROR" })
        }
    }

    
  //2 second api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };


    useEffect(() => {
        getProduct(API);
    }, [])

    return <AppContext.Provider value={{ ...state,getSingleProduct  }}>{children}</AppContext.Provider>
}

// custom hook
const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext }





