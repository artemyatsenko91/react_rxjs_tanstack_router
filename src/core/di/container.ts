import "reflect-metadata";
import { container } from "tsyringe";
import SessionService from "../services/sessionService";
import AuthService from "../../features/auth/authService";

const SESSION_SERVICE = Symbol("SESSION_SERVICE");
const AUTH_SERVICE = Symbol("AUTH_SERVICE");

container.registerSingleton(SessionService, SessionService);
container.registerSingleton(AuthService, AuthService);

export { SESSION_SERVICE, AUTH_SERVICE };
