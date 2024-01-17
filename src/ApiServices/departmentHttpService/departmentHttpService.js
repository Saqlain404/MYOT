import { toast } from "react-toastify";
import adminHttpService from "../adminHttpService";
import Swal from "sweetalert2";

const id = localStorage.getItem("user_id");

export async function DepartmentDashboardCount() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/dashboads-count-user`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DepartmentTemplateCount() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/total-templete-count`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DepartmentHomeCount() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/dashboads-total-department`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TicketCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/total-ticket-count/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DocumentCount(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/total-templete-present/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ProfileDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/profile-details/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function RequestsList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/requests-list`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DashboardList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/home-approved-templete/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TemplateList(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/templete-list/${id}`
    );
    // console.log(data, "template");

    // if (!data.error) {
    //   toast.success(data?.message);
    //   // await localStorage.getItem("x-auth-token-company");
    // } else toast.error(data?.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function CertificateList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/certificate-list`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function CommentsList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/document-comment-details/${id}`
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchCertificate(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/certificate-search`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchRequests(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/search-requests`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchTemplates(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/templete-search`,
      formData
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ApproverList(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/aprrover-list`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function SignatoryList(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/signatory-list`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function AdminsList(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/admin-list`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function ManagerList(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/manager-list`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function AddTemplates(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/add-templete`,
      formData
    );
    if (data && !data?.error) {
      return { data };
    }
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function ProfileDeptUpdate(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/update-profile/${id}`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function TicketList(id, formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function OngoingTicketList(id, formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function NewTicketList(id,formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function NewTicket(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function CompletedTemplateList(formData) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/templete-listing`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function AssignTemplate(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/department/assign-templete`,
      formData
    );
    // console.log(data);
    if (!data.error) {
      toast.success(data.message);
      // await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

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

export async function AnnouncementList(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/request-list/${id}`,
      // formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function AnnouncementSearch(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/search-Document/${id}`,
      // formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ContactUs() {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/contact-us`,
      // formData
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