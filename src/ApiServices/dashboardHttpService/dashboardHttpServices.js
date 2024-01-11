import Swal from "sweetalert2";
import adminHttpService from "../adminHttpService";
import { toast } from "react-toastify";

export async function AddDepartment(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-add`,
      formData
    );
    console.log(data);
    if (!data.error) {
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function DepartmentList(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-list/${id}`,
      formData
    );
    console.log(data);
    if (!data?.error) {
      return { data };
    } else toast.error(data?.message);
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DepartmentDetails(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-view`,
      formData
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ViewDepartment(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-view/${id}`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DepartmentSearch(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-search`,
      formData
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
// export async function AddEmployee(formData) {
//   try {
//     const { data } = await adminHttpService.post(
//       `${process.env.REACT_APP_APIENDPOINT}/api/company/register-employee`,
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

export async function getClinicianData(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getClinicianData/${id}`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function getClinicianSessionHistory(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getClinicianSessionHistory`,
      formData
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// TASK API
export async function GetTaskData(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/template-list/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function GetApprovedTemplates(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/approved-templete/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchTask(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/templete-search`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TemplateDelete(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/delete-templete/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TemplateCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/total-templete-cout/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function AddCommentForTask(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/add-comment`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TasksCommentList(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/comment-details/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TasksCommentDelete(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/delete-comment/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function AdminDashboardCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-count/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DepartmentDelete(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-delete/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response)
      Swal.fire({
        toast: true,
        icon: "error",
        position: "top-end",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    return { error };
  }
}

export async function DashboardTotalDocument() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/total-document`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// ADMIN TICKET COUNT
export async function AdminTicketCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/total-ticket-count/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// Admin Dashboard Listing
export async function AdminDashboardListing(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/complete-templete/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
// APPROVER API
export async function ApproverList(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/approver-list/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ApproverSearch(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/search-approver`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// SIGNATORY

export async function SignatoryList(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/signatory-list/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SignatorySearch(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/signatory-search`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// REQUESTOR

export async function RequestorList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/requests-list`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function HomeRequestorList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/admin-request-list/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchRequestor(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/search-requests-document`,
      formData
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DocumentComment(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/add-document-comment`,
      formData
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DocumentDelete(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/delete-document/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function RequestCommentDelete(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/delete-comment/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DocumentCommentLists(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/document-comment-details/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TemplateReply(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/reply-comment`,
      formData
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// PROFILE

export async function AdminProfile(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/getMyProfile/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function UpdateAdminProfile(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/update-Profile/${id}`,
      formData
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// DASHBOARD DATA

export async function DashboardCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employe-count/${id}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

//  Users Section api / Employee list

export async function AddEmployee(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/register-employee/${id}`,
      formData
    );
    if (data?.error) {
      toast.error(data?.message);
    }
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeLists(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employee-list/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeSearch(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employee-search`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function EmployeeView(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employee-view/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeEdit(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employee-edit/${id}`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeDelete(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/employee-delete/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// Announcemnts api

export async function AnnouncementLists(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/announcement-list/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function CreateAnnouncement(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/create-announcement`,
      formData
    );
    if (data?.error) {
      toast.error(data?.message);
      return false;
    } else {
      return { data };
    }
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// LOGOS

export async function Logos(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/logo-list/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function UpdateLogo(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/add-logo`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// Help n Support

export async function EmployeeContactUs(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/contact-us`,
      formData
    );
    if (data?.error) {
      toast.error(data?.message);
    }
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeNewTicket(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/create-ticket`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeTicketList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeOngoingTicketList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/onGoing-ticket/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeNewTicketList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/new-ticket/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeResolvedTicketList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/complete-ticket/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function EmployeeLogout(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/employee-logout/${id}`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// ANALYTICS

export async function AnalyticsData() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/total-active-user`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
