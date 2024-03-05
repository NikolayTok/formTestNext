import styles from "../styles/form.module.css"
import {IFormDataType} from "../types";

type FormDataListProps = {
  data: IFormDataType
}

export default function FormDataList({data}: FormDataListProps) {
  return (
    <div className={styles.formResults}>
      <h2>Form Data</h2>
      <ul className={styles.formResultList}>
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className={styles.listItem}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
