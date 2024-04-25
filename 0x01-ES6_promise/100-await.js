import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let tphoto;
  let tuser;
  try {
   tphoto = await uploadPhoto();
    tuser = await createUser();
  } catch (error) {
    tphoto = null;
    tuser = null;
  }
  return { tphoto, tuser };
}
