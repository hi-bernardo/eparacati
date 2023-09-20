import { useEffect } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

import "./Datepicker.css";

function Datepicker() {
   useEffect(() => {
      let currentMonth = document.querySelector(".current-month");
      let calendarDays = document.querySelector(".calendar-days");
      let today = new Date();
      let date = new Date();

      currentMonth.textContent = date.toLocaleDateString("en-US", {
         month: "long",
         year: "numeric",
      });
      today.setHours(0, 0, 0, 0);
      renderCalendar();

      function renderCalendar() {
         const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
         ).getDate();
         const totalMonthDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
         ).getDate();
         const startWeekDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
         ).getDay();

         calendarDays.innerHTML = "";

         let totalCalendarDay = 6 * 7;
         for (let i = 0; i < totalCalendarDay; i++) {
            let day = i - startWeekDay;

            if (i <= startWeekDay) {
               // adding previous month days
               calendarDays.innerHTML += `<span class="prev-month-day">${
                  prevLastDay - i
               }</span>`;
            } else if (i <= startWeekDay + totalMonthDay) {
               // adding this month days
               date.setDate(day);
               date.setHours(0, 0, 0, 0);

               let dayClass =
                  date.getTime() === today.getTime()
                     ? "selected-day"
                     : "month-day";
               calendarDays.innerHTML += `<span class="${dayClass}" id="day-${day}">${day}</span>`;
            } else {
               // adding next month days
               calendarDays.innerHTML += `<span class="next-month-day">${
                  day - totalMonthDay
               }</span>`;
            }
         }
      }

      document.querySelectorAll(".month-btn").forEach(function (element) {
         element.addEventListener("click", function () {
            date = new Date(currentMonth.textContent);
            date.setMonth(
               date.getMonth() + (element.classList.contains("prev") ? -1 : 1)
            );
            currentMonth.textContent = date.toLocaleDateString("en-US", {
               month: "long",
               year: "numeric",
            });
            renderCalendar();
         });
      });

      document.querySelectorAll(".btn").forEach(function (element) {
         element.addEventListener("click", function () {
            let btnClass = element.classList;
            date = new Date(currentMonth.textContent);
            if (btnClass.contains("today")) date = new Date();
            else if (btnClass.contains("prev-year"))
               date = new Date(date.getFullYear() - 1, 0, 1);
            else date = new Date(date.getFullYear() + 1, 0, 1);

            currentMonth.textContent = date.toLocaleDateString("en-US", {
               month: "long",
               year: "numeric",
            });
            renderCalendar();
         });
      });

      calendarDays.addEventListener("click", (event) => {
         const selectedDay = document.querySelector(".selected-day");

         if (event.target.classList.contains("month-day")) {
            let dayId = event.target.id;

            document.getElementById(dayId).classList.remove("month-day");
            document.getElementById(dayId).classList.add("selected-day");

            selectedDay.classList.remove("selected-day");
            selectedDay.classList.add("month-day");
         }
      });
   }, []);

   return (
      <div className="datepicker">
         <div className="card bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="calendar-toolbar border-b border-gray-200 dark:border-gray-800">
               <button className="prev month-btn text-2xl text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-200 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                  <HiChevronLeft />
               </button>
               <div className="current-month text-gray-950 dark:text-gray-50"></div>
               <button className="next month-btn text-2xl text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-200 font-medium rounded-lg px-3 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                  <HiChevronRight />
               </button>
            </div>
            <div className="calendar">
               <div className="weekdays w-full flex justify-around">
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Dom
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Seg
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Ter
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Qua
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Qui
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Sex
                  </div>
                  <div className="weekday-name text-gray-950 dark:text-gray-50">
                     Sab
                  </div>
               </div>
               <div className="calendar-days grid grid-cols-7 text-gray-900 dark:text-gray-100"></div>
            </div>
         </div>
      </div>
   );
}
export default Datepicker;
