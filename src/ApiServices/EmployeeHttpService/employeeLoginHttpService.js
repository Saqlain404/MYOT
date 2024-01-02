import { useEffect } from "react";
import employeeHttpService from "../LoginHttpService/employeeHttpService";
import { toast } from "react-toastify";


const id = localStorage.getItem("user_id") ||  localStorage.getItem("myot_admin_id");
console.log("id: ",id)
// const id ="656982002e4c41f286f7dffb"

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
      toast.success(data.message);
    } else toast.error(data.message);


    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}


export async function OTPverifyEmply(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/verify-otp`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-company");
      toast.success(data.message);
    } else {toast.error(data.message)
    };

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function ContactUsEmployee(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/contact-us`,
      formData
    );
    console.log(data);

    if (!data.error) {
      // await localStorage.removeItem("token-company");
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}


export async function AddCommentEmply(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/add-comment`,
      formData
    );
   
    console.log(data);

    // return { data };
    if (!data.error) {
      toast.success(data.message);
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

export async function EmployeeDashList(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/complete-document/${ids}`
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
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-details/${id}`
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


export async function TicketListEmply() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${id}`
    );

    if (!response.data?.error) {
      const ticketList = response.data.results.ticketList;
      console.log(ticketList)

      return [ticketList];
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
export async function OnGoingListEmply() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/onGoing-ticket/${id}`
    );

    if (!response.data?.error) {
      const ticketList = response.data.results.onGoingTicket;
      console.log(ticketList)

      return [ticketList];
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
export async function NewTicketEmply() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/new-ticket/${id}`
    );

    if (!response.data?.error) {
      const ticketList = response.data.results?.ticket;
      console.log(ticketList)

      return [ticketList];
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
export async function ResolveListEmpl(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/complete-ticket/${ids}`
    );

    if (!response.data?.error) {
      const ticketList = response.data.results.ticket;
      console.log(ticketList)

      return [ticketList];
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


export async function PresentDocumentDash(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/total-document-present/${ids}`
    );

    if (!response.data?.error) {
      const docPresent = response.data;
      console.log(docPresent)

      return [docPresent];
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
export async function DocRequestCount() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/total-document-request/${id}`
    );

    if (!response.data?.error) {
      const docData = response?.data?.results;
      console.log(docData)

      return [docData];
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
export async function CommentViewEmply(id) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/comment-view/${id}`
    );

    if (!response.data?.error) {
      const commentData = response?.data?.results;
      console.log(commentData)

      return {commentData};
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

export async function totalTicketCount(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/total-ticket-count/${ids}`
    );

    if (!response.data?.error) {
      const docPresent = response.data;
      console.log(docPresent)

      return [docPresent];
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
export async function GetLogoEmply() {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/logo-list/${id}`
    );

    if (!response.data?.error) {
      const logo = response?.data;
      console.log(logo)
      

      return [logo];
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


export async function AddLogoEmply(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/add-logo`,
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


export async function CreateEmplyTicket(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/create-ticket`,
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


export async function employeDocumentList(ids){
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/document-list/${ids}`
    );

    
if (!response.data?.error) {
  const documentList = response?.data?.results?.documentList;
  console.log(documentList)
  

  // Extract template names from the document list
  const templateNames = documentList?.map(doc => doc);

  return documentList;
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



export async function EmpyHistoryLogList(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/pendning-document/${ids}`
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
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/search-document/${id}`,
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

export async function LogOutEmply() {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/employee-logout/${id}`
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



