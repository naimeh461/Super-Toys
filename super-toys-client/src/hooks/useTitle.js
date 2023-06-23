import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title}-Super Toy`;
    },[title])
}

export default useTitle;