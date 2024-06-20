import User from '../models/User';
import UserView from '../views/UserView';

class UserController {
    private user: User;
    private view: UserView;

    constructor(user: User, view: UserView) {
        this.user = user;
        this.view = view;
    }

    public updateUser(name: string, age: number): void {
        this.user.name = name;
        this.user.age = age;
        this.view.render(this.user);
    }

    public displayUser(): void {
        this.view.render(this.user);
    }
}

export default UserController;
