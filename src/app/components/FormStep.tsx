import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {generateMockFields} from '../utils/generateMockFields';
import styles from "../styles/form.module.css"
import {useRouter} from "next/router";
import FormDataList from "./FormDataList";
import {IFormDataType} from "../types";

interface FormStepProps {
  step: number;
}

const FormStep = ({step}: FormStepProps) => {
  const fields = generateMockFields();
  const router = useRouter();
  const [data, setData] = useState<IFormDataType | null>(null)
  const {register, handleSubmit, formState: {isValid, errors}} = useForm<IFormDataType>();
 
  const onSubmit = (data: IFormDataType) => {
    if (isValid) {
      setData(data)
    } else {
      console.log("error")
    }
  };

  const goPrevStep = () => {
    router.push(`/form/${+step - 1}`)
  };

  const goNextStep = () => {
    router.push(`/form/${+step + 1}`)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formWrap}>
          {fields.map((field, index) => {
            const isFieldVisible = index >= (step - 1) * 50 && index < step * 50;
            const fieldClasses = isFieldVisible ? styles.formFields : `${styles.formFields} ${styles.hidden}`;

            return (
              <div key={field.id} className={fieldClasses}>
                <label htmlFor={field.id} className={styles.label}>{field.label}</label>
                <input
                  {...register(field.id, {required: true})}
                  id={field.id}
                  type={field.type}
                  placeholder={`Step ${step}`}
                  className={styles.input}
                />
                {isFieldVisible && errors[field.id] && <div className={styles.errorMessage}>this is required</div>}
              </div>
            );
          })}
        </div>
        <div className={styles.buttonWrap}>
          <div>
            {step > 1 && (
              <button type="button" className={`${styles.buttonPrev} ${styles.button}`} onClick={goPrevStep}>
                Back
              </button>
            )}
          </div>
          {step < 5 && (
            <button type="button" className={`${styles.buttonNext} ${styles.button}`} onClick={goNextStep}>
              Next
            </button>
          )}
          {step == 5 && (
            <button type="submit" className={`${styles.buttonSubmit} ${styles.button}`}>submit</button>
          )}
        </div>
      </form>
      {data ? (
        <FormDataList data={data} />
      ) : <div></div>}

    </div>
  );
};

export default FormStep;
