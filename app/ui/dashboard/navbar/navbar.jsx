import Image from "next/image";
import styles from "./navbar.module.css";
import { MdNotifications } from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const Navbar = async () => {
  const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.title}>Micro Bank | ABC pvt.ltd</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdNotifications size={20} />
          <div className={styles.userDetail}>
            <span className={styles.username}>{user.username}</span>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className={styles.logout}>Logout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
