/**
 * Created By Soumya(soumya@smarttersstudio.com) on 06/07/21 at 11:43 AM.
 */
import { BadRequest } from '@feathersjs/errors';

const ValidateBalance = () => async (context) => {
    const { data, app } = context;

    const { amount, account } = data;

    const accountBalance = await app
        .service('account')
        ._get(account, {
            query: {
                status: 1,
            },
        })
        .then((res) => res.balance)
        .catch(() => {
            throw new BadRequest('Invalid account.');
        });

    if (accountBalance < amount) throw new BadRequest('Insufficient Balance.');
};

export default ValidateBalance;
