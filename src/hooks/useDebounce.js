// in useDebouce if you pass a orignal callback then it pass the modefy callback with delay of set time. 

function useDebounce(cd ,delay=1000){
    let timerId;
    return(...args)=>{
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            cd(...args);

        },delay)
    }
}
export default useDebounce;

// import { useState, useEffect } from 'react';

// function useDebounce(value, delay) {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);

//     return debouncedValue;

// }
// export default useDebounce