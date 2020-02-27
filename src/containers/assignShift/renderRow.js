import React, { useState } from "react";
import DatePicker from "react-datepicker";

const RenderRow = ({ days, onChange }) => {
  return (
    <React.Fragment>
      {days.map(day => (
        <tr key={day.id}>
          <td>{day.day}</td>
          <td>
            <DatePicker
              selected={day.startTime}
              onChange={date => onChange(day.id, "startTime", date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </td>
          <td>
            <DatePicker
              selected={day.endTime}
              onChange={date => onChange(day.id, "endTime", date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
};

export default RenderRow;
