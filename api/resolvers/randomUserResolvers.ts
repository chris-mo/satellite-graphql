import getUserService from '../services/randomUserService';

const randomUserResolver = {
    Query: {
        getUser: () => getUserService.getUser()
    }
}   

export default randomUserResolver;
