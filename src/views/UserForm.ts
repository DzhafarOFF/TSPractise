import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps>{

    eventsMap(): {[key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick.bind(this),
            'click:.set-name': this.onSetNameClick.bind(this),
            'click:.save-model': this.onSaveClick.bind(this),
        }
    }

    onSetAgeClick(): void {
        console.log('Change age');
        this.model.setRandomAge();
    }

    onSetNameClick(): void {
        console.log('Change name');
        const input = document.querySelector('input');
        if (input){
            const name = input.value;
            this.model.set({name: name});
        }
    }

    onSaveClick(): void {
        console.log('Saved');
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Set name</button>
                <button class="set-age">Set random age</button>
                <button class="save-model">Save user</button>
            </div>
        `;
    }
    
}