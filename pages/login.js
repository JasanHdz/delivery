import Wrapper from 'common/wrapper'
import Navigation from 'common/navigation'
import Menu from 'common/menu'
import Layout from 'components/login/layout'
import Form from 'components/login/form'

function Login() {
  return (
    <Layout>
      <Navigation />
      {/* <Menu /> */}
      <Form />
    </Layout>
  )
}

export default Login