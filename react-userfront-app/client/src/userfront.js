import Userfront from '@userfront/react';

Userfront.init('wbmzzq4n');

const SignupForm = Userfront.build({
  toolId: 'rlmorr',
});

const LoginForm = Userfront.build({
  toolId: 'blmrno',
});

const PasswordResetForm = Userfront.build({
  toolId: 'krlnan',
});

const LogoutButton = Userfront.build({
  toolId: 'lodkao',
});

export { Userfront, SignupForm, LoginForm, PasswordResetForm, LogoutButton };
