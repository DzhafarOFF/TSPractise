import { Attributes } from './Attributes'
import { Eventing, Callback } from "./Eventing";
import { ApiSync } from "./ApiSync";
import axios, {AxiosResponse, AxiosPromise} from "axios";
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps>{
    static build(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        )
    }
    
    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, User.build.bind(this));
    }

    setRandomAge(): void{
        const age = Math.round(Math.random() * 100);
        this.set({age: age})
    }
}