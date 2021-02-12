import Wrapper from 'common/wrapper'
import Menu from 'common/menu'
import Layout from 'components/login/layout'
import Form from 'components/login/form'

function Login() {
  return (
    <Layout>
      <Menu />
      <Wrapper>
        <Form />
      </Wrapper>
    </Layout>
  )
}

export default Login