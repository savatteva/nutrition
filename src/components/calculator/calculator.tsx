import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css"
import clsx from "clsx";

type TSelectOptions = {
  value: string;
  label: string;
}

type TSelect = TSelectOptions[];

const calculatorOptionsActivity:TSelect = [
  {value: "1.200", label: "1.200"},
  {value: "1.375", label: "1.375"},
  {value: "1.550", label: "1.550"},
  {value: "1.725", label: "1.725"},
  {value: "1.900", label: "1.900"},
]

const Calculator = () => {
  const {
    register,
    handleSubmit, 
    formState: {errors}
  } = useForm();

  const [calories, setCalories] = useState<number>();

  const onSubmit = (data) => {
    const preparingData = (data) => {
      try {
        const counting = 9.99 * Number(data.weight) + 6.25 * Number(data.height) - 4.92 * Number(data.age) - 161

        const countingCalories = Math.round(counting * Number(data.activity));
        setCalories(countingCalories)

        return countingCalories

      } catch (error) {
        console.log(error)
      }
    }

    preparingData(data);
  }

  return (
    <>
      {calories ? (
        <>
          <p><span className={clsx(styles.accentColor, styles.textBold)}>{calories}</span> - ваша калорийность на дефицит</p>
          <div>
            <p>что бы вы хотели изучить дальше?</p>
            <div>

            </div>
          </div>
        </>
      ) : (
        <Form className="d-flex gap-3 flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column">
          <Form.Label>введите ваш вес</Form.Label>
          <Form.Control type="number" {...register("weight", {required: true})} />
          {errors.weight && <span className={styles.accentColor}>это поле обязательно</span>}
        </div>
        <div className="d-flex flex-column">
          <Form.Label>введите ваш рост</Form.Label>
          <Form.Control type="number" {...register("height", {required: true})} />
          {errors.height && <span className={styles.accentColor}>и это поле обязательно</span>}
        </div>
        <div className="d-flex flex-column">
          <Form.Label>введите ваш возраст</Form.Label>
          <Form.Control type="number" {...register("age", {required: true})} />
          {errors.age && <span className={styles.accentColor}>даже это поле обязательно!</span>}
        </div>
        <div className="d-flex flex-column">
          <Form.Label>выберите свой индекс активности</Form.Label>
          <Form.Select {...register("activity", {required: true})} >
            {calculatorOptionsActivity.map((item) => {
              return (
                <option value={item.value} key={item.value}>{item.label}</option>
              )
            })}
          </Form.Select>
          {errors.activity && <span className={styles.accentColor}>This field is required</span>}
        </div>
  
        <Button type="submit">рассчитать</Button>
      </Form>
      )}
    </>
  )
}

export default Calculator;