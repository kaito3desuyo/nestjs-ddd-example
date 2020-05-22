import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { TypeOrmNamingStrategy } from './typeorm-naming-strategy';

const ORM_CONFIG: TypeOrmModuleOptions = {
    type: "sqlite",
    database: ":memory:",
    entities: [join(__dirname, '..', '..', 'libs', '**', '*.model.{ts,js}')],
    dropSchema: true,
    synchronize: true,
    namingStrategy: new TypeOrmNamingStrategy(),
};

export = ORM_CONFIG;
