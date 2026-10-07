import {useCallback, useMemo, useState} from "react"

const MemoizedComponent = () => {
  const [count, setCount] = useState(0)

  const complexComputation = (num: number) => {
    return num ** 5 + count
  }

  const computedValue = useMemo(() => complexComputation(count), [count])

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [])

  return (
    <section className="counter-card" aria-labelledby="counter-title">
      <h2 id="counter-title">Лічильник</h2>
      <p className="counter-description">
        Натискайте кнопку, щоб збільшити значення.
      </p>
      <p className="counter-value">Значення лічильника: {count}</p>
      <p className="counter-result">
        Результат складного обчислення: {computedValue}
      </p>
      <button className="counter-button" onClick={increment}>
        Збільшити на 1
      </button>
    </section>
  )
}

export default MemoizedComponent