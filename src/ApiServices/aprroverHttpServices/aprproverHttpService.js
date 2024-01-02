import { toast } from "react-toastify";
import employeeHttpService from "../LoginHttpService/employeeHttpService";


const id = localStorage.getItem("user_id") ||  localStorage.getItem("myot_admin_id");
console.log(id)

export async function approverTempleteList(ids){
    try {
      const response = await employeeHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/temlete-list/${ids}`
      );
  
      
  if (!response.data?.error) {
    const templeteList = response?.data?.results?.Templatelist;
    console.log(templeteList)
    return templeteList;
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

  export async function searchTemplete(searchKey,ids) {
    try {
      const { data } = await employeeHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-search/${ids}`,
        {search:searchKey}
      );
  
      if (!data?.error) {
        const searchTerm = searchKey?.searchTerm?.toLowerCase();
        
        
        const filteredDocuments = data?.results?.templete?.filter(document =>
          document.templeteName.toLowerCase().includes(searchTerm)
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



  export async function searchDocTemplete(searchKey) {
    try {
      const { data } = await employeeHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/search-Document`,
        {search:searchKey}
      );
  
      if (!data?.error) {
        const searchTerm = searchKey?.searchTerm?.toLowerCase();
        
        
        const filteredDocuments = data?.results?.documentList?.filter(document =>
          document.templeteName.toLowerCase().includes(searchTerm)
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

  export async function templeteDocList() {
    try {
      const response = await employeeHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/request-list`
      );
  
      if (!response.data?.error) {
        const templeteDocList = response?.data?.results?.documentList;
        console.log(templeteDocList)
        
  
        return templeteDocList;
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

  
  export async function homeCount() {
    try {
      const {data} = await employeeHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/total-employee-count`
      );
  
      if (!data?.error) {
        const homeCount = data?.results;
        console.log(homeCount)
        
  
        return homeCount;
      } else {
        toast.error(data.message);
        return null;
      }
    } catch (error) {
      if (error.response) {
        toast.error(error?.data.message);
      } else {
        toast.error('An error occurred while fetching the template IDs.');
      }
      return null;
    }
  }

  export async function templeteViewDetails(){
    try {
      const response = await employeeHttpService.post(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-details/${id}`
      );
  
      
  if (!response.data?.error) {
    const templeteView = response?.data?.results;
    console.log(templeteView)
    return templeteView;
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
  export async function profileDetails(ids) {
    try {
      const response = await employeeHttpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/api/approver/profile-details/${ids}`
      );
  
      if (!response.data?.error) {
        const templateList = response?.data?.results;
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
  
export async function updateProfile(formData,ids) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/update-profile/${ids}`,
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


export async function AddLogoAprv(formData) {
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


export async function GetLogoEmply(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/logo-list/${ids}`
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

export async function TicketListAprv(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/ticket-list/${ids}`
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

export async function OnGoingAprv(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/onGoing-ticket/${ids}`
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

export async function contactUsAprv(formData) {
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
export async function LogoutAprv() {
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

