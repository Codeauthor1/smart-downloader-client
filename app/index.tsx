import { Redirect } from 'expo-router'

const RedirectToHome: React.FunctionComponent = () => {
  return <Redirect href='/home/' />
};

export default RedirectToHome