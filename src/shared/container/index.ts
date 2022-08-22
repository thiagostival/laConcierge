import { container } from "tsyringe";

import { IClientRepository } from "../../modules/client/repositories/IClientRepository";
import ClientRepository from "../../modules/client/repositories/implementations/ClientRepository";
import { IEstablishmentRepository } from "../../modules/establishment/repositories/IEstablishmentRepository";
import EstablishmentRepository from "../../modules/establishment/repositories/implementations/EstablishmentRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { UsersTokenRepository } from "../../modules/users/repositories/implementations/UsersTokenRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IUsersTokenRepository } from "../../modules/users/repositories/IUsersTokenRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokenRepository>(
  "UsersTokenRepository",
  UsersTokenRepository
);

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);

container.registerSingleton<IEstablishmentRepository>(
  "EstablishmentRepository",
  EstablishmentRepository
);
