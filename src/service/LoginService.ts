import { fetchData } from './BaseService'

const getUserData = () => {
    return fetchData('/user/me')
}
export { getUserData }
