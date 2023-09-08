import { MenuItem } from "@shared/interfaces/menu.interfaces";

export const mockMenuItemNoSession: MenuItem[] = [
    {
        title: "Inicio",
        link: "/inicio",
        icon: 'home-outline',
        status: true
    },
    {
        title: "Iniciar Sesión",
        link: "/sesion/inicio-sesion",
        icon: 'person-outline',
        status: true
    }
];

export const mockMenuItemSession: MenuItem[] = [
    {
        title: "Inicio",
        link: "/inicio",
        icon: 'home-outline',
        status: true
    },
    {
        title: "Agendar Turno",
        link: "/agendamiento",
        icon: 'calendar-outline',
        status: true
    },
    {
        title: "Cerrar Sesión",
        link: "/sesion/cerrar-sesion",
        icon: 'close-outline',
        status: true
    },
];