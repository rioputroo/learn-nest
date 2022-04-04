import { Module } from '@nestjs/common';

import { AuthModule } from '@auth-modules/auth.module';
import { BookmarkModule } from '@bookmark-modules/bookmark.module';
import { UserModule } from '@user-modules/user.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
