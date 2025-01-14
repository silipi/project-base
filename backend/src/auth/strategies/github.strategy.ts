import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { AuthService } from '../auth.service';
import { Provider } from '@prisma/client';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { emails, username, displayName } = profile;
    const user = {
      email: emails[0].value,
      username: username,
      firstName: displayName?.split(' ')[0] || username,
      lastName: displayName?.split(' ')[1] || '',
      provider: Provider.GITHUB,
    };

    return this.authService.validateSocialUser(user);
  }
}
