import CustomHead from "@/app/components/CustomHead";
import FormStep from "@/app/components/FormStep";
import {GetStaticPaths, GetStaticProps} from 'next';
import styles from "../../app/styles/form.module.css"

const FormPage = ({step}: {step: number}) => {
  return (
    <div className={styles.formConatiner}>
      <CustomHead title={`Step ${step}`} />
      <h1>Current step: {step}</h1>
      <FormStep step={step} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Array.from({length: 5}).map((_, index) => ({
    params: {step: (index + 1).toString()},
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({params}) => {
  const step = params?.step;

  return {
    props: {step},
  };
};

export default FormPage;
