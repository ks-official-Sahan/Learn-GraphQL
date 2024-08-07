import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          //   url: 'mongodb+srv://imcrox:830dsbBBgVwnS1Wg@imcrox.vu7gu.mongodb.net/chatDemo',
          url: config.get('DATABASE_URL'),
        },
      },
    });
    console.log('Database connected');
  }
}
