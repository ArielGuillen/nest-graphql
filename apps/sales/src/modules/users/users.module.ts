import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserModel, UserSchema } from './models/user.model';
import { UserService } from './services/user.service';
import { UserResolver } from './users.resolver';

@Module({
  imports: [
    ClientsModule.register([{ name: 'RESOURCES_SERVICE', transport: Transport.TCP }]),
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UserService, UserResolver],
})
export class UsersModule {}
