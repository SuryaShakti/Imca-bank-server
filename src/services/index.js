import user from './user/user.service';
import account from './account/account.service';
import upload from './upload/upload.service';

// eslint-disable-next-line no-unused-vars
export default function (app) {
    app.configure(user);
    app.configure(account);
    app.configure(upload);
}
