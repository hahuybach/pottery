import { fetchData } from './BaseService'

const getUserData = () => {
    return fetchData('/secured')
}
export { getUserData }
