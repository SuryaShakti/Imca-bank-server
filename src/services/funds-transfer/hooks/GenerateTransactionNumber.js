/**
 * Created by Soumya (soumya@smarttersstudio.com) on 09/05/21 at 1:31 AM.
 */
import generateCode from '../../../utils/generateCode';

const GenerateTransactionNumber = () => async (context) => {
    const { data, app } = context;

    let code = await generateCode(app, 'funds-transfer', 'transactionCode', 10);

    data.transactionCode = `TRXN${code}`;

    return context;
};

export default GenerateTransactionNumber;
