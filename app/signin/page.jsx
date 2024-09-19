import styles from "@/app/ui/login/login.module.css";
import AddUserPage from "../ui/adduserPage/adduser";

const SigninPage = () => {
  return (
    <div className={styles.container}>
      <AddUserPage />
    </div>
  );
};

export default SigninPage;
