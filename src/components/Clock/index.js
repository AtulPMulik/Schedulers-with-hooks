import {useEffect, useState} from 'react'
import {
  ClockContainer,
  Heading,
  ClockImage,
  TodaysDate,
  Time,
} from './styledComponents'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    console.log('Effect is executed')
    return () => {
      clearInterval(timerId)
      console.log('Interval is cleared')
    }
  }, [])
  // console.log(time)

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <TodaysDate> {time.toLocaleDateString()} </TodaysDate>
      <Time> {time.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
