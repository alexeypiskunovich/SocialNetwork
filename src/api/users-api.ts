import { GetItemsType, instance, APIResponseType} from './api.ts';
import { profileApi } from './profile-api.ts';

export const usersApi = {
    getUsers(currentPage:number, pageSize:number, term:string='', friend: null | boolean=null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend=== null ? '': `&friend=${friend}` ))
            .then(res => {
                return res.data;
                
            });
    },
    follow(userId:number){
        return instance.post<APIResponseType>(`follow/${userId}`).then(res=> res.data)
    },
    unfollow(userId:number){
        return instance.delete<APIResponseType>(`follow/${userId}`).then(res=> res.data)

    },
    getProfile(userId:number){
        return profileApi.getProfile(userId);
      
    }
}