export default function authErrorMessageParser(errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz eposta Adresi';
    case 'auth/email-already-in-use':
      return 'Kullanıcı zaten var';

    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı';
      case 'auth/wrong-password':
        return 'Parola yanlıs'
    default:
      return errorCode;
  }
}
