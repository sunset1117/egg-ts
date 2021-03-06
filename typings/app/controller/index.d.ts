// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';
import ExportDtoAccount from '../../../app/controller/dto/account';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
    dto: {
      account: ExportDtoAccount;
    };
  }
}
