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