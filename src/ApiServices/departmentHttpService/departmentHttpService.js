import { toast } from "react-toastify";
import adminHttpService from "../adminHttpService";

const id = localStorage.getItem("user_id");

export async function DepartmentDashboardCount () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/dashboads-count-user`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function DepartmentTemplateCount () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/total-templete-count`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function DepartmentHomeCount () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/dashboads-total-department`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function TicketCount () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/total-ticket-count/65607377c34695508b3551dc`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function DocumentCount () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/total-templete-present/65607377c34695508b3551dc`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function ProfileDetails () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/profile-details/656995d2c152b587fb27a180`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function RequestsList () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/requests-list`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function DashboardList () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/home-approved-templete/656995d2c152b587fb27a180`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function TemplateList() {
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

  export async function CertificateList () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/certificate-list`,
      );
      // console.log(data);
  
      return { data };
    } catch (error) {
      if (error.response) toast.error(error.response.data.message);
      return { error };
    }
  }

  export async function CommentsList () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/company/document-comment-details/657c136a7eec23f6e4664b87`,
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
  export async function ProfileDeptUpdate(formData) {
    try {
      const { data } = await adminHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/update-profile/656995d2c152b587fb27a180`,
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

  export async function TicketList(formData) {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/656982002e4c41f286f7dffb`,
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
  
  export async function OngoingTicketList(formData) {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/656982002e4c41f286f7dffb`,
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

  export async function NewTicketList(formData) {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/656982002e4c41f286f7dffb`,
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

  export async function NewTicket(formData) {
    try {
      const { data } = await adminHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/656982002e4c41f286f7dffb`,
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
