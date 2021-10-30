/**
 * Created By Soumya(soumya@smarttersstudio.com) on 30-10-2021 at 20:13.
 * @description increase request count for user.
 */

const IncreaseRequestCount = () => async (context) => {
    const { app, result } = context;

    const { user } = result;

    await app.service('user')._patch(user, {
        $inc: {
            requestCount: 1,
        },
    });
};

export default IncreaseRequestCount;
