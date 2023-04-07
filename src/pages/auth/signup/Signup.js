import {View, Text} from 'react-native';
import styles from './Signup.style';
import {Formik} from 'formik';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
export default function SignUp({navigation}) {
  const initialFormValues = {
    userMail: '',
    password: '',
    rePassword: '',
  };
  async function handleFormSubmit(formValues) {
    if (formValues.password != formValues.rePassword) {
      showMessage({
        message: 'Sifreler uyusmuyor.',
        type: 'danger',
      });
    }
    if (formValues.password == formValues.rePassword) {
      try {
        await auth().createUserWithEmailAndPassword(
          formValues.userMail,
          formValues.password,
        );
        console.log('Basarılı');
        showMessage({
          message: 'Kullanıcı Olusturuldu',
          type: 'info',
        });
        navigation.navigate('LoginPage');
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'danger',
        });
      }
    }
  }
  function navigateToBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.header}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.body}>
              <Input
                onType={handleChange('userMail')}
                value={values.userMail}
                placeholder="e posta adresinizi giriniz.."
              />
              <Input
                onType={handleChange('password')}
                value={values.password}
                placeholder="sifrenizi giriniz.."
              />
              <Input
                onType={handleChange('rePassword')}
                value={values.rePassword}
                placeholder="sifrenizi tekrar giriniz.."
              />
            </View>
            <Button text="Kayıt Ol" theme="Primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <View style={styles.footer}>
        <Button text="Geri" theme="Secondary" onPress={navigateToBack} />
      </View>
    </View>
  );
}
