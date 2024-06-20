import User from './models/User';
import UserView from './views/UserView';
import UserController from './controllers/UserController';

function main() {
    // Crear el modelo
    const user = new User('John Doe', 30);

    // Crear la vista
    const view = new UserView();

    // Crear el controlador
    const controller = new UserController(user, view);

    // Mostrar el usuario actual
    controller.displayUser();

    // Actualizar el usuario y mostrarlo nuevamente
    controller.updateUser('Jane Doe', 25);
}

main();
