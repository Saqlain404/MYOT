import { useEffect } from "react";
import employeeHttpService from "../LoginHttpService/employeeHttpService";
import { toast } from "react-toastify";


const id = localStorage.getItem("user_id")

export async function employeeLogin(formData) {
  try {
    const { data, headers } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/employee-login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-company");
      await localStorage.setItem("token-company", headers["x-auth-token-company"]);
      await localStorage.setItem("user_id", data?.results?.employee._id);

      toast.success("Success");
    } else toast.error(data.message);

    console.log("error" + data.message);
    return { data };
  } catch (error) {
    if (error?.response) toast.error(error?.response.data.message);
    return { error };
  }
}

export async function EmplforgotPassword(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/send-email`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-company");
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

export async function EmployeeDashList() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/complete-document/${id}`
    );

    if (!response.data?.error) {
      const templateList = response?.data?.results?.completeDocument;
      // console.log(templateList)

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

export async function documentViewDetails() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-details/657853a8a6a190aabf64f55a`
    );

    if (!response.data?.error) {
      const templateList = response?.data?.results?.document;
      

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


export async function employeProfileDetail() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/employee-details/${id}`
    );

    if (!response.data?.error) {
      const templateList = response?.data;
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


export async function updateProfile(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/edit-profile/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
      const templateId = data?.results;
      return { data, templateId };
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
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
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-list/${id}`
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



export async function EmpyHistoryLogList() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/pendning-document/${id}`
    );

    if (!response.data?.error) {
      const templateList = response?.data;
      console.log(templateList)
      

      return [templateList];
    } else {
      toast.error(response?.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response?.data.message);
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

      // toast.success(data.message);
      console.log(data.message)
    } else {
      console.log(data.message)
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function searchDash(searchKey) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/search-complete-document/${id}`,
      {search:searchKey}
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();
      
      
      
      const filteredDocuments = data?.results?.document.filter(document =>
        document.templete.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message)
    } else {
      console.log(data.message)
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}


export async function searchHistoryLog(searchKey) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/pending-docuement-search/${id}`,
      {search:searchKey}
    );
    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();
      
      
      
      const filteredDocuments = data?.results?.document.filter(document =>
        document.templete.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message)
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
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-count/${id}`
    );
    console.log(data);
    if (!data?.error) {
      // toast.success(data.message);
      console.log(data.message)
    } else toast.error(data.message);

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function DasboardCount() {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/pending-request-count/${id}`
    );
    console.log(data);
    if (!data?.error) {
      // toast.success(data.message);
      console.log(data.message)
    } else toast?.error(data.message);

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}



