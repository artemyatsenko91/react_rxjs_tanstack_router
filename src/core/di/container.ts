import { container } from "tsyringe";
import SessionService from "../services/sessionService";
import AuthService from "../../features/auth/authService";

container.registerSingleton(SessionService);
container.registerSingleton(AuthService);
