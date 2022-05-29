import { useState } from 'react';
import ReactDatePicker  from 'react-datepicker'
import pl from 'date-fns/locale/pl'

import 'react-datepicker/dist/react-datepicker.css';
import "./index.css"

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        calendarClassName="root"
        formatWeekDay={(nameOfDay) => nameOfDay.at(0).toUpperCase()}
        locale={pl}
        inline
      />
    );
}

export default DatePicker