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
      await localStorage.setItem("user_id", data.results.employee._id);

      toast.success("Success");
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

export async function fetchTemplateData() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/templete-list`
    );

    if (!response.data?.error) {
      const templateList = response?.data?.results?.TempleteList;
      console.log(templateList)

      return [templateList];
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error('An error occurred while fetching the template IDs.');
    }
    return null;
  }
}



export async function AddDocument(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/add-document`,
      formData
    );
    // console.log(data);
    if (!data.error) {
      toast.success(data.message);
      const templateId = data?.results?.document.templete_Id;
      return { data, templateId };
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}


export async function employeDocumentList(){
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-list/656982002e4c41f286f7dffb`
    );

    
if (!response.data?.error) {
  const documentList = response?.data?.results?.documentList;
  

  // Extract template names from the document list
  const templateNames = documentList?.map(doc => doc);
  console.log(templateNames)

  return templateNames;
}else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error('An error occurred while fetching the template IDs.');
    }
    return null;
  }
}

export async function searchDoc(searchKey) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/search-document`,
      {search:searchKey}
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();
      
      
      const filteredDocuments = data?.results?.document.filter(document =>
        document.templete.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      toast.success(data.message);
    } else {
      console.log(data.message)
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DocumentCount() {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-count/656982002e4c41f286f7dffb`
    );
    console.log(data);
    if (!data?.error) {
      toast.success(data.message);
    } else toast?.error(data.message);

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function DasboardCount() {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/pending-request-count/656982002e4c41f286f7dffb`
    );
    console.log(data);
    if (!data?.error) {
      toast.success(data.message);
    } else toast?.error(data.message);

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}



