import Layout from "components/Layout";
import Input from "components/Input";
import Button from "components/Button";
import styles from "pages/account/Login.module.scss";

const Login = () => {
  return (
    <Layout>
      <div className={styles.login}>
        <div className={styles.loginTitle}>
          <h1>Login</h1>
        </div>
        <form className={styles.loginForm}>
          <Input label="Email" placeholder="email" />
          <Input label="Password" placeholder="password" type="password" />
          <Button title="Login" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
