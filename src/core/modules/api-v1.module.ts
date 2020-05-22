import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';

const routes: Routes = [
    {
        path: '/v1',
        children: [
        ],
    },
];

@Module({
    imports: [RouterModule.forRoutes(routes)],
    exports: [RouterModule],
})
export class ApiV1Module { }
