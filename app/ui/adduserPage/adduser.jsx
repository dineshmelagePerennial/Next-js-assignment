import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/adduserPage/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <h1>Registration</h1>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
