import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
    eventsMap(): {[key: string]: () => void}{
        return {}
    }
    template(): string {
        return `
            <div>
                <h2>User form</h2>
                <h3>User name: ${this.model.get('name')}</h3>
                <h3>User age: ${this.model.get('age')}</h3>
            </div>
        `;
    }
}