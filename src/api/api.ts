
import axios from "axios"
import { ContactType, PhotosType, UserType } from "../types/types"

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "60326824-2d1f-471c-b3c5-78606849bdb2"
    }
})


export enum ResultCodesEnum{
    Success=0,
    Error=1,
}
export enum ResultCodeForCaptchaEnum{
    CaptchaIsRequired=10
}
// type MeResponseType={
//     data:{id:number
//          email:string
//          login:string }
//     resultCode:ResultCodesEnum
//     messages:Array<string>
// }
// type LoginResponseType={
//     data:{userId:number
//           }
//     resultCode:ResultCodesEnum | ResultCodeForCaptcha
//     messages:Array<string>
// }

export type GetItemsType={
    items:Array<UserType>
    totalCount:number
    error:string | null

}
export type APIResponseType<D={}, RC=ResultCodesEnum>={
    data:D
    messages:Array<string>
    resultCode:RC
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotosType
    aboutMe: string
}



