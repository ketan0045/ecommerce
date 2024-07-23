const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":   
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
   
        case "SET_GRID_VIEW":
          return {
            ...state,
            grid_view: true,
          };
        case "SET_LIST_VIEW":
           return {
              ...state,
              grid_view: false,
            };

        case "GET_SORT_VALUE":
            //  let userSortValue = document.getElementById("sort");
            //  let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
          
           return {
                ...state,
                sorting_value:action.payload,
              };

        case "SORTING_PRODUCTS":
                let newSortData;
                // let tempSortProduct = [...action.payload];
          
                const { filter_products, sorting_value } = state;
                let tempSortProduct = [...filter_products];
          
                const sortingProducts = (a, b) => {
                  if (sorting_value === "lowest") {
                    return a.price - b.price;
                  }
          
                  if (sorting_value === "highest") {
                    return b.price - a.price;
                  }
          
                  if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                  }
          
                  if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                  }
                };
          
                newSortData = tempSortProduct.sort(sortingProducts);
          
                return {
                  ...state,
                  filter_products: newSortData,
                };

      case "UPDATE_FILTERS_VALUE" :
        const {name,value} =action.payload
        return {
          ...state,
          filters :{
              ...state.filters,
              [name]:value
          }
        }

      case "FILTER_PRODUCTS" :

        let {all_products}= state
        let tempFilterProduct = [...all_products]

        const { text } = state.filters;

        if (text) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }
        return {
          ...state,
          filter_products: tempFilterProduct,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;


//  1.... const filterReducer = (state, action) => {
//     switch (action.type) {
//       case "LOAD_FILTER_PRODUCTS":
//         const filterProducts = Array.isArray(action.payload) ? [...action.payload] : [];
  
//         return {
//           ...state,
//           filter_products: filterProducts,
//           all_products: filterProducts,
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default filterReducer; 

// 2....old reducer up32date    

// const filterReducer = (state, action) => {
//   switch (action.type) {
//     case "LOAD_FILTER_PRODUCTS":
//       return {1
//         ...state,
//         filter_products: [...action.payload],
//         all_products: [...action.payload],
//       };

//       case "SET_GRID_VIEW":
//         return {
//           ...state,
//           grid_view: true,
//         };
//       case "SET_LIST_VIEW":
//          return {
//             ...state,
//             grid_view: false,
//           };

//       case "GET_SORT_VALUE":
//            let userSortValue = document.getElementById("sort");
//            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
//           // console.log(sort_value,"sort_valuesort_value")
//          return {
//               ...state,
//               sorting_value:sort_value
//             };

//       case "SORTING_PRODUCTS":
//               let newSortData;
//               let tempSortProduct = [...action.payload];

//               if (state.sorting_value === "lowest") {
//                 const sortingProduct =(a,b)=>{
//                   return a.price -b.price;
//                 }
//                 newSortData =tempSortProduct.sort(sortingProduct);
//               }

//               if (state.sorting_value === "highest") {
//                 const sortingProduct =(a,b)=>{
//                   return b.price -a.price;
//                 }
//                 newSortData =tempSortProduct.sort(sortingProduct);
//               }
              
//                 if (state.sorting_value === "a-z") {
//                   newSortData =tempSortProduct.sort((a,b)=>
//                   a.name.localeCompare(b.name)
//                   );
//                 }
        
//                 if (state.sorting_value === "z-a") {
//                   newSortData =tempSortProduct.sort((a,b)=>
//                   b.name.localeCompare(a.name)
//                   );
//                 }
        
//           return {
//                ...state,
//                filter_products:newSortData,
//                };

//     default:
//       return state;
//   }
// };

// export default filterReducer;

// old reducer up32date 












