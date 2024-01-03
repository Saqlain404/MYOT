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

  export async function TemplateList () {
    try {
      const { data } = await adminHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/department/templete-list/6569854a7df1d82ae466234e`,
      );
      // console.log(data);
  
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