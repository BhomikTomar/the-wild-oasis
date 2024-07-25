/* eslint-disable react/prop-types */
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        title="Bookings"
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        title="Sales"
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        title="Check ins"
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
        title="Occupancy rate"
        color="yellow"
      />
    </>
  );
}

export default Stats;
