import React, { useState } from "react";
import MiniCalendar from "./MiniCalendar";
import { Link } from "react-router-dom";
import SidebarDepartment from "./SidebarDepartment";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const CalenderDept = () => {
  const [calType, setCalType] = useState("day");
  const events = [
    // Add your events here
    { title: "Event 1", start: "2024-01-11T10:00:00" },
    { title: "Event 2", start: "2024-01-22T14:30:00" },
    // Add more events as needed
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar pe-0">
            <SidebarDepartment />
          </div>
          <div className="col middle-content bg-body-tertiary p-0 min-vh-100">
            <div className="container-fluid border-bottom sticky-top bg-white mb-4">
              <nav className="row header bg-white  ">
                <ul className="col align-items-center mt-3">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <a className="nav-link ms-2" href="app-email.html">
                      /Calendar
                    </a>
                  </li>
                </ul>
                <div className="col d-flex align-items-center  justify-content-end">
                  <form className="" role="search">
                    <input
                      className="form-control search-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <div className="">
                    <img
                      src="/images/dashboard/announcement.png"
                      alt=""
                      className="ms-4 "
                    />
                    <Link to={"/Department/Chat"}>
                      <img
                        src="/images/dashboard/chat-left-dots-fill.png"
                        alt=""
                        className="ms-4"
                      />
                    </Link>
                    <img
                      src="/images/dashboard/round-notifications.png"
                      alt=""
                      className="ms-4"
                    />
                  </div>
                </div>
              </nav>
            </div>

            <div className="d-flex ps-3 ">
              <p
                onClick={() => setCalType("day")}
                className={
                  calType === "day"
                    ? "active_tab th-text p-2"
                    : "p-2 th-text cal_tab"
                }>
                Day
              </p>
              <p
                onClick={() => setCalType("week")}
                className={
                  calType === "week"
                    ? "active_tab th-text p-2"
                    : "p-2 th-text cal_tab"
                }>
                Week
              </p>
              <p
                onClick={() => setCalType("month")}
                className={
                  calType === "month"
                    ? "active_tab th-text p-2"
                    : "p-2 th-text cal_tab"
                }>
                Month
              </p>

              <p
                onClick={() => setCalType("year")}
                className={
                  calType === "year"
                    ? "active_tab th-text p-2"
                    : "p-2 th-text cal_tab"
                }>
                Year
              </p>
            </div>

            <div className="container px-4 text-center">
              <div className="row gx-5">
                <div className="col-3  ">
                  <div className=" bg-white min-vh-100 p-4 ">
                    <button className="create-task-btn ">+ Create Task</button>
                    {(calType === "day" && (
                      <Calendar className="mini-calendar" />
                    )) ||
                      (calType === "week" && (
                        <Calendar className="mini-calendar" />
                      )) ||
                      (calType === "month" && (
                        <Calendar
                          defaultView="year"
                          className="mini-calendar"
                        />
                      )) ||
                      (calType === "year" && (
                        <Calendar className="mini-calendar" />
                      ))}
                  </div>
                </div>
                {(calType === "day" && (
                  <div className="col-9 bg-white shadow" key={calType}>
                    <FullCalendar
                      plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                      initialView="timeGridDay" // You can change this to 'dayGridDay', 'timeGridWeek', 'timeGridDay', or 'listWeek'
                      events={events}
                    />
                  </div>
                )) ||
                  (calType === "week" && (
                    <div className="col-9 bg-white shadow" key={calType}>
                      <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="listWeek" // You can change this to 'dayGridDay', 'timeGridWeek', 'timeGridDay', or 'listWeek'
                        events={events}
                      />
                    </div>
                  )) ||
                  (calType === "month" && (
                    <div className="col-9 bg-white shadow" key={calType}>
                      <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="dayGridMonth" // You can change this to 'dayGridDay', 'timeGridWeek', 'timeGridDay', or 'listWeek'
                        events={events}
                      />
                    </div>
                  )) ||
                  (calType === "year" && (
                    <div className="col-9 bg-white shadow" key={calType}>
                      <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                        initialView="dayGridYear" // You can change this to 'dayGridDay', 'timeGridWeek', 'timeGridDay', or 'listWeek'
                        events={events}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderDept;
