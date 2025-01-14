import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { Provider } from '@prisma/client';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    const { emails, displayName, name } = profile;
    const user = {
      email: emails[0].value,
      username: emails[0].value.split('@')[0],
      firstName: name?.givenName || displayName?.split(' ')[0],
      lastName: name?.familyName || displayName?.split(' ')[1] || '',
      provider: Provider.GOOGLE,
    };

    return this.authService.validateSocialUser(user);
  }
}
