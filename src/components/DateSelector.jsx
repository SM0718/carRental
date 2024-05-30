import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateSelector({className}) {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className={'bg-[#222222] text-start lg:text-center hover:text-[#f5b754] w-full lg:w-24'} selected={startDate} onChange={(date) => setStartDate(date)} />
  )
}

export default DateSelector