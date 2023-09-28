import { Menu } from "./Menu";

export interface CartItem extends Menu {
    quantity: number;
}