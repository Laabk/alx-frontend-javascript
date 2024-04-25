import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const prmiss = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const rslt = [];
  return Promise.allSettled(prmiss).then((results) => {
    results.map(({ status, value, reason }) => (
      rslt.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return rslt;
  });
}
