import { useState } from 'react';
import DatePicker from 'react-date-picker';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const  DatePickerModule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} returnValue="range"  allowPartialRange="true" goToRangeStartOnSelect={true} />
    </div>
  );
}

export default DatePickerModule