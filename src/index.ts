import { User } from "./models/User";
import { UserForm } from "./views/UserForm";
import { UserEdit } from "./views/UserEdit";
const collection = User.buildUserCollection()
collection.on('change', () => {
    console.log('change, collection:', collection);
})
collection.fetch();
const userModel = User.build({name: 'Tommy', age: 25})
const root = document.getElementById('root');

if (root){
    const userEdit = new UserEdit(root, userModel);
    userEdit.render();
}
else {
    throw new Error('Root elemnt not finded')
}