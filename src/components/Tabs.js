"use client";

import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { doc, getFirestore, setDoc } from "firebase/firestore";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  createCurrentMonthBC,
  db,
  getBCData,
  getMonths,
  getUsers,
} from "@/services/firebase";

// Add a new document in collection "cities"
const bcData = [
  {
    mid: 9,
    total: 120000,
    boli: 0,
    pata: 0,
    payable: 10000,
    month: "September, 23",
  },
  {
    mid: 10,
    total: 108000,
    boli: 12000,
    pata: 0,
    payable: 9000,
    month: "October, 23",
  },
  {
    mid: 11,
    total: 109200,
    boli: 10800,
    pata: 1200,
    payable: 9100,
    month: "November, 23",
  },
  {
    mid: 12,
    total: 110400,
    boli: 9600,
    pata: 2400,
    payable: 9200,
    month: "December, 23",
  },
  {
    mid: 1,
    total: 111600,
    boli: 8400,
    pata: 3600,
    payable: 9300,
    month: "January, 24",
  },
  {
    mid: 2,
    total: 112800,
    boli: 7200,
    pata: 4800,
    payable: 9400,
    month: "February, 24",
  },
  {
    mid: 3,
    total: 114000,
    boli: 6000,
    pata: 6000,
    payable: 9500,
    month: "March, 24",
  },
  {
    mid: 4,
    total: 115200,
    boli: 4800,
    pata: 7200,
    payable: 9600,
    month: "April, 24",
  },
  {
    mid: 5,
    total: 116400,
    boli: 3600,
    pata: 8400,
    payable: 9700,
    month: "May, 24",
  },
  {
    mid: 6,
    total: 117600,
    boli: 2400,
    pata: 9600,
    payable: 9800,
    month: "June, 24",
  },
  {
    mid: 7,
    total: 118800,
    boli: 1200,
    pata: 10800,
    payable: 9900,
    month: "July, 24",
  },
  {
    mid: 8,
    total: 120000,
    boli: 0,
    pata: 12000,
    payable: 10000,
    month: "August, 24",
  },
];

export default function Tabs() {
  let [categories] = useState({
    Pending: [
      {
        id: 1,
        name: "Babu Sarilla",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        name: "Babu Sarilla",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 3,
        title: "Is tech making coffee better or worse?",
        name: "Babu Sarilla",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 4,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 5,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 6,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 7,
        title: "The most innovative things happening in coffee",
        name: "L Joseph",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 8,
        title: "The most innovative things happening in coffee",
        name: "Swamy",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 9,
        title: "The most innovative things happening in coffee",
        name: "K Surya",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 10,
        title: "The most innovative things happening in coffee",
        name: "Babji",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 11,
        title: "The most innovative things happening in coffee",
        name: "J Srinu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 12,
        title: "The most innovative things happening in coffee",
        name: "K Surya",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Completed: [
      {
        id: 12,
        title: "The most innovative things happening in coffee",
        name: "K Surya",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    All: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        name: "Babu Sarilla",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        name: "Babu Sarilla",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 3,
        title: "Is tech making coffee better or worse?",
        name: "Babu Sarilla",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 4,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 5,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 6,
        title: "The most innovative things happening in coffee",
        name: "CH Trimurtulu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 7,
        title: "The most innovative things happening in coffee",
        name: "L Joseph",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 8,
        title: "The most innovative things happening in coffee",
        name: "Swamy",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 9,
        title: "The most innovative things happening in coffee",
        name: "K Surya",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 10,
        title: "The most innovative things happening in coffee",
        name: "Babji",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 11,
        title: "The most innovative things happening in coffee",
        name: "J Srinu",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
      {
        id: 12,
        title: "The most innovative things happening in coffee",
        name: "K Surya",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });
  let [isOpen, setIsOpen] = useState(false);
  let [isopenTable, setOpenTable] = useState(false);
  let [currentMonthBCData, setCurrentMonthBCData] = useState({});

  let [months, setMonths] = useState([]);
  let [pendingUsers, setPendingUser] = useState([]);
  let [users, setUsers] = useState([]);
  let [bcData, setBCData] = useState([]);

  useEffect(() => {
    getMonths(setMonths);
    getUsers(setUsers);
    getBCData(setBCData);
  }, []);

  useEffect(() => {
    let pendingUsers = users.filter((user) => user.status === "pending");
    setPendingUser(pendingUsers);
  }, [users]);

  function closeModal() {
    setIsOpen(false);

    getMonths(setMonths);
    getUsers(setUsers);
    getBCData(setBCData);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeTable() {
    setOpenTable(false);
  }

  function openTable() {
    setOpenTable(true);
  }

  const createBcData = (userData) => {
    let currentMonth = new Date().getMonth() + 1;
    console.log(userData);

    let currentMonthData = months.filter(
      (data) => data.mid === currentMonth
    )[0];

    setCurrentMonthBCData({
      ...currentMonthData,
      ...userData,
    });

    openModal();
  };

  return (
    <div className="w-full px-2 py-6 sm:px-0">
      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        currentMonthBCData={currentMonthBCData}
        key={currentMonthBCData}
      />

      <MyTable
        isOpen={isopenTable}
        closeModal={closeTable}
        openModal={openTable}
        months={months}
        // currentMonthBCData={currentMonthBCData}
        key={currentMonthBCData}
      />

      <div className="flex items-center justify-between">
        <p className="px-2 my-2 text-xl font-semibold">Members</p>
        <p
          className="p-2 px-4 my-2 text-xl font-semibold text-white bg-blue-700 rounded-xl"
          onClick={() => openTable()}
        >
          Months
        </p>
      </div>
      <Tab.Group>
        <Tab.List className="flex p-1 mt-4 space-x-1 rounded-xl bg-blue-900/10">
          {Object.keys(categories).map((category, i) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category} {i === 0 && pendingUsers.length}{" "}
              {i === 2 && users.length} {i === 1 && bcData.length}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => {
            if (idx === 0) {
              return (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {pendingUsers.map((users, i) => (
                      <li
                        key={users.id}
                        className="relative p-3 py-6 my-2 rounded-md hover:bg-gray-100 bg-blue-50"
                        onClick={() => createBcData(users)}
                      >
                        <h3 className="text-xl font-medium leading-5">
                          <span className="mr-4">{i + 1}</span>
                          {users.name}
                        </h3>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              );
            }

            if (idx === 1) {
              return (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {bcData.map((month, i) => (
                      <li
                        key={month.id}
                        className="relative p-3 py-4 my-2 rounded-md hover:bg-gray-100 bg-blue-50"
                      >
                        <div className="text-lg font-medium leading-6 text-gray-900">
                          {month.month}
                        </div>
                        <div className="flex flex-col gap-3 mt-4">
                          <div className="flex justify-between">
                            <p className="text-xl font-semibold">
                              {month.name}
                            </p>
                            <p className="text-3xl font-semibold">
                              <span>₹ </span>
                              {month.total}
                            </p>
                          </div>
                          <div className="flex justify-between text-lg">
                            <p className="">Boli</p>
                            <p>
                              {" "}
                              <span>₹ </span>
                              {month.boli}
                            </p>
                          </div>
                          <div className="flex justify-between text-lg">
                            <p className="">Pata</p>
                            <p>
                              {" "}
                              <span>₹ </span>
                              {month.pata}
                            </p>
                          </div>
                          <div className="flex justify-between mt-2">
                            <p className="text-xl font-semibold">Payable</p>
                            <p className="text-xl font-semibold">
                              <span>₹ </span>
                              {month.payable}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              );
            }

            if (idx === 2) {
              return (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {users.map((users, i) => (
                      <li
                        key={users.id}
                        className="relative p-3 py-6 my-2 rounded-md hover:bg-gray-100 bg-blue-50"
                      >
                        <h3 className="text-xl font-medium leading-5">
                          <span className="mr-4">{i + 1}</span>
                          {users.name}
                        </h3>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              );
            }
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function MyModal({ isOpen, openModal, closeModal, data, currentMonthBCData }) {
  const createBcData = () => {
    createCurrentMonthBC(currentMonthBCData);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {currentMonthBCData.month}
                </Dialog.Title>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between mt-4">
                    <p className="text-xl font-semibold">
                      {currentMonthBCData.name}
                    </p>
                    <p className="text-3xl font-semibold">
                      <span>₹ </span>
                      {currentMonthBCData.total}
                    </p>
                  </div>
                  <div className="flex justify-between text-lg">
                    <p className="">Boli</p>
                    <p>
                      {" "}
                      <span>₹ </span>
                      {currentMonthBCData.boli}
                    </p>
                  </div>
                  <div className="flex justify-between text-lg">
                    <p className="">Pata</p>
                    <p>
                      {" "}
                      <span>₹ </span>
                      {currentMonthBCData.pata}
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xl font-semibold">Payable</p>
                    <p className="text-xl font-semibold">
                      <span>₹ </span>
                      {currentMonthBCData.payable}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-8 py-4 font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={createBcData}
                  >
                    Create
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function MyTable({ isOpen, openModal, closeModal, months }) {
  console.log(months);

  // const createBcData = () => {
  //   createCurrentMonthBC(currentMonthBCData);
  // };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between w-full text-lg font-medium leading-6 text-gray-900"
                >
                  Months{" "}
                  <span className="ml-auto" onClick={() => closeModal()}>
                    X
                  </span>
                </Dialog.Title>

                <div>
                  <table className="w-full mb-4 bg-white rounded shadow-md text-md">
                    <tbody>
                      <tr className="border-b">
                        <th className="p-3 px-5 text-left">Month</th>
                        <th className="p-3 px-5 text-left">Total</th>
                        <th className="p-3 px-5 text-left">Payable</th>
                      </tr>
                      {months.map((month, i) => (
                        <tr
                          key={month.mid}
                          className="bg-gray-100 border-b hover:bg-orange-100"
                        >
                          <td className="p-3 px-5">{month.month}</td>
                          <td className="p-3 px-5">{month.total}</td>
                          <td className="p-3 px-5">{month.payable}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
