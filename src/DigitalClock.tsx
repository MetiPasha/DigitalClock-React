import { useEffect, useState } from "react";

// Define a type for the state holding the time
const DigitalClock = () => {
  // Declare time state with the correct type 'Date'
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to format the time to the desired format
  function DNumbers(): string {
    let hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const meridiem = hour >= 12 ? "PM" : "AM";

    // Convert the hour to 12-hour format (0 becomes 12, hours > 12 are reduced to 1-12 range)
    hour = hour % 12 || 12;
    return `${Zero(hour)}:${Zero(minute)}:${Zero(second)} ${meridiem}`;
  }

  // Function to add leading zero if the number is less than 10
  function Zero(number: number): string {
    return number < 10 ? "0" + number : number.toString();
  }

  return (
    <div className="digitalClock-container">
      <div className="clock">
        <span>{DNumbers()}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
