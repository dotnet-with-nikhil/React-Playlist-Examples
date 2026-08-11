import styles from "./EmployeeCard.module.css";

function EmployeeCard({ name, role, experience, className = "" }) {
  return (
    <div className={`${styles.card} ${className}`.trim()}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <span className={styles.experienceBadge}>{experience} yrs</span>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardRole}>
          Role: <strong>{role}</strong>
        </p>
      </div>
    </div>
  );
}

export default EmployeeCard;