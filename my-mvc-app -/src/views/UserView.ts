class UserView {
    public render(user: { name: string, age: number }): void {
        console.log(`User: ${user.name}, Age: ${user.age}`);
    }
}

export default UserView;
