import employeeHttpService from "../LoginHttpService/employeeHttpService";
import { toast } from "react-toastify";

export async function employeeLogin(formData) {
  try {
    const { data, headers } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/employee-login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-employee");
      await localStorage.setItem("token-employee", headers["x-auth-token-employee"]);

      toast.success(data.message);
    } else toast.error(data.message);

    console.log("error" + data.message);
    return { data };
  } catch (error) {
    if (error?.response) toast.error(error?.response.data.message);
    return { error };
  }
}

export async function forgotPassword(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/send-email`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-employee");
      toast.success(data.results.otp);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}
// export async function verifyOTP(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/verify-otp`,
//       formData
//     );
//     console.log(data);
//     if (!data?.error) {
//       toast.success(data.message);
//     } else toast?.error(data.message);

//     if (!data?.error) return { data };
//   } catch (error) {
//     if (error?.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function updatePassword(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/updatePassword`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getDashboardCount() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getDashboardCount`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getNotificationList() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getNotificationList`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function changePassword(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/changePassword`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function updateProfile(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/updateProfile`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getemployeeData() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getemployeeData`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function contactUs(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/contactUs`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function joinUs(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/joinUs`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function subscribeUs(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/subscribeUs`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getQuery(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getQuery`,
//       formData
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getSubscribeList(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getSubscribeList`,
//       formData
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getJoinList(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getJoinList`,
//       formData
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function donate(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/donate`,
//       formData
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function subscribe() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/subscribe`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function success(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/success`,
//       formData
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function addActivity(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/addActivity`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function editActivity(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/editActivity`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getActivities() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getActivities`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function changeActivityStatus(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/changeActivityStatus/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteActivity(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteActivity/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getActivityDetail(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getActivityDetail/${id}`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function addJournal(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/addJournal`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function editJournal(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/editJournal`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getJournals() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getJournals`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function changeJournalStatus(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/changeJournalStatus/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteJournal(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteJournal/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getJournalDetail(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getJournalDetail/${id}`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function addWorksheet(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/addWorksheet`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function editWorksheet(formData) {
//   try {
//     const { data } = await employeeHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/editWorksheet`,
//       formData
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function getWorksheets() {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getWorksheets`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function changeWorksheetStatus(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/changeWorksheetStatus/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteWorksheet(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteWorksheet/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
// export async function getWorksheetDetail(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/getWorksheetDetail/${id}`
//     );
//     console.log(data);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteJoin(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteJoin/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteSubscribe(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteSubscribe/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }

// export async function deleteQuery(id) {
//   try {
//     const { data } = await employeeHttpService.get(
//       `${process.env.REACT_APP_APIENDPOINT}/employee/deleteQuery/${id}`
//     );
//     console.log(data);
//     if (!data.error) {
//       toast.success(data.message);
//     } else toast.error(data.message);

//     return { data };
//   } catch (error) {
//     if (error.response) toast.error(error.response.data.message);
//     return { error };
//   }
// }
