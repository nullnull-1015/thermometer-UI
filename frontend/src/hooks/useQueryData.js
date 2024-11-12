import { useQuery } from 'react-query'
import axios from "axios"

const useQueryData = () => {
    const getData = async () => {
        const result = await axios.get(
            process.env.NODE_ENV === 'production' ? "/data" : "http://localhost:8000/data"
        )
        return result.data
    }
    return useQuery({
        queryKey: ['data'],
        queryFn: getData,
    })
}
