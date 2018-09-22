import getUserService from '../services/randomUserService';


const randomUserResolver = {
    Query: {
        getUser: () => {
            return getUserService.getUser();
        }
    }
}   

export default randomUserResolver;