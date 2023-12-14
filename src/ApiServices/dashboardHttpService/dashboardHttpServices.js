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
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function DepartmentList(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-list`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
      await localStorage.getItem("x-auth-token-company");
    } else toast.error(data.message);

    return { data };
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
export async function AddEmployee(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/register-employee`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

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
export async function GetTaskData () {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/template-list`,
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SearchTask (formData) {
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

export async function AddCommentForTask (formData) {
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

export async function AdminDashboardCount () {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/department-count`,
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

// APPROVER API
export async function ApproverList () {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/approver-list`,
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ApproverSearch (formData) {
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

export async function SignatoryList () {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/signatory-list`,
    );
    // console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function SignatorySearch (formData) {
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

export async function RequestorList () {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/requests-list`,
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}


export async function SearchRequestor (formData) {
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

