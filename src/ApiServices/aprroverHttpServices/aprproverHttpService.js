import { toast } from "react-toastify";
import employeeHttpService from "../LoginHttpService/employeeHttpService";
import Swal from "sweetalert2";

const id =
  localStorage.getItem("user_id") || localStorage.getItem("myot_admin_id");
console.log(id);

export async function approverTempleteList(ids) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/temlete-list/${ids}`
    );

    if (!response.data?.error) {
      const templeteList = response?.data?.results?.Templatelist;
      console.log(templeteList);
      return templeteList;
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function searchTemplete(searchKey, ids) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-search/${ids}`,
      { search: searchKey }
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();

      const filteredDocuments = data?.results?.templete?.filter((document) =>
        document.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message);
    } else {
      console.log(data.message);
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
      { search: searchKey }
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();

      const filteredDocuments = data?.results?.searchDocument?.filter(
        (document) => document?.templeteName?.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message);
    } else {
      console.log(data.message);
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
      console.log(templeteDocList);

      return templeteDocList;
    } else {
      toast.error(response?.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response?.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}
export async function requestDocAprv(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/admin-request-list/${ids}`
    );

    if (!response.data?.error) {
      const templeteDocList = response?.data?.results?.list;
      console.log(templeteDocList);

      return templeteDocList;
    } else {
      toast.error(response?.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response?.data.message);
    } else {
      // toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function homeCount() {
  try {
    const { data } = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/total-employee-count`
    );

    if (!data?.error) {
      const homeCount = data?.results;
      console.log(homeCount);

      return homeCount;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error?.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}
export async function dashCount() {
  try {
    const { data } = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/count-templete`
    );

    if (!data?.error) {
      const homeCount = data?.results;
      console.log(homeCount);

      return homeCount;
    } else {
      toast.error(data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error?.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function templeteViewDetails(id) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-details/${id}`
    );

    if (!response.data?.error) {
      const templeteView = response?.data?.results;
      console.log(templeteView);
      return templeteView;
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
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
      console.log(templateList);
      // Swal.fire({
      //   toast: true,
      //   icon: "success",
      //   position:"top-end",
      //   title: "Profile Updated",
      //   showConfirmButton: false,
      //   timerProgressBar: true,
      //   timer: 3000,
      // });

      return [templateList];
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function updateProfile(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/update-profile/${id}`,
      formData
    );
    console.log(data);
    if (!data.error) {
      // toast.success(data.message);
      const templateId = data?.results;
      return { data, templateId };
    } else
    //  toast.error(data.message);
    {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error in Update Password",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      })
    }

    return { data };
  } catch (error) {
    if (error.response) {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error in Update Password",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      })
    }
    // toast.error(error.response.data.message);
    return { error };
  }
}
export async function updateResetPassword(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/employee/reset-password`,
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
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Logo Added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      const templateId = data?.results;
      return { data, templateId };
    } else{
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    return { data };
  } catch (error) {
    if (error.response) 
    // toast.error(error.response.data.message);
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
      console.log(logo);

      return [logo];
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
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
      console.log(ticketList);

      return [ticketList];
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
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
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Ticket Created Successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      const templateId = data?.results?.document.templete_Id;
      return { data, templateId };
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    return { data };
  } catch (error) {
    if (error.response) 
    // toast.error(error.response.data.message);
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
      console.log(ticketList);

      return [ticketList];
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
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
      // toast.success(data.message);
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Create Contact Successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) 
    // toast.error(error.response.data.message);
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
      console.log(data.message);
      Swal.fire({
        toast: true,
        icon: "Logout Successfully",
        position:"top-end",
        title: "Logout Successfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    } else{
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response)
    //  toast.error(error.response.data.message);
    return { error };
  }
}

export async function HistoryLogApprovedList(ids) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/history-approved-templete/${ids}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data?.results?.Templete;
      console.log(templeteList);
      return templeteList;
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}
export async function HistoryLogRejectedList(ids) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/history-rejected-templete/${ids}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data?.results?.Templete;
      console.log(templeteList);
      return templeteList;
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function approvedTemplete(documentIds) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-approved/${documentIds}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data;
      console.log(templeteList);
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Templete Approved",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return templeteList;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}
export async function rejectedTemplete(documentIds) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/templete-rejected/${documentIds}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data;
      console.log(templeteList);
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Templete Rejected",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return templeteList;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function ApprovedTempeleteSearch(searchKey) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/approved-templete-search/${id}`,
      { search: searchKey }
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();

      const filteredDocuments = data?.results?.documentList?.filter(
        (document) => document.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message);
    } else {
      console.log(data.message);
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function RejectedTempeleteSearch(searchKey) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/rejected-templete-search/${id}`,
      { search: searchKey }
    );

    if (!data?.error) {
      const searchTerm = searchKey?.searchTerm?.toLowerCase();

      const filteredDocuments = data?.results?.documentList?.filter(
        (document) => document.templeteName.toLowerCase().includes(searchTerm)
      );

      console.log(filteredDocuments);

      // toast.success(data.message);
      console.log(data.message);
    } else {
      console.log(data.message);
    }

    if (!data?.error) return { data };
  } catch (error) {
    if (error?.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function AddAnnouncement(formData,creator_Id) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/create-announcement`,
      formData, creator_Id
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Announcement Added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      const templateId = data?.results;
      return { data, templateId };
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    return { data };
  } catch (error) {
    if (error.response) 
    toast.error(error.response.data.message);
    return { error };
  }
}

export async function AnnouncementList(ids) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/announcement-list/${ids}`
    );

    if (!response.data?.error) {
      const announcementList = response.data.results.announcementList;
      console.log(announcementList);

      return [announcementList];
    } else {
      toast.error(response.data.message);
      return null;
    }
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}
export async function AnalyticsDataAprv() {
  try {
    const { data } = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/total-month-templete`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function totalDocRequestAprv() {
  try {
    const { data } = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/total-document-Request`
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function AddCommentApprv(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/add-comment`,
      formData
    );
   
    console.log(data);

    // return { data };
    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Comment Added",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) 
    // toast.error(error.response.data.message);
    return { error };
  }
}
export async function AddReplyCommentApprv(formData) {
  try {
    const { data } = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/reply-comment`,
      formData
    );
   
    console.log(data);

    // return { data };
    if (!data.error) {
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Reply Added Succesfully",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });

    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
    }

    if (!data.error) return { data };
  } catch (error) {
    if (error?.response) 
    // toast.error(error.response.data.message);
    return { error };
  }
}
export async function CommentViewApprv(id) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/comment-details/${id}`
    );

    if (!response.data?.error) {
      const commentData = response?.data?.results?.commentDetails;
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
export async function DeleteCommentAprv(comment_id) {
  try {
    const response = await employeeHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/delete-comment/${comment_id}`
    );

    if (!response.data?.error) {
      const commentData = response?.data.message;
      console.log(commentData)
      // toast.success(commentData)
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Comment Deleted",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      

      return {commentData};
    } else {
      // toast.error(response.data.message);
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error('An error occurred while fetching the template IDs.');
    }
    return null;
  }
}


export async function approvedDocumentRequest(documentIds) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/approved-document/${documentIds}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data;
      console.log(templeteList);
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Template Approved",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return templeteList;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

export async function rejectedDocumentRequest(documentIds) {
  try {
    const response = await employeeHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/approver/rejected-document/${documentIds}`
    );
    if (!response.data?.error) {
      const templeteList = response?.data;
      console.log(templeteList);
      Swal.fire({
        toast: true,
        icon: "success",
        position:"top-end",
        title: "Template Rejected",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return templeteList;
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        position:"top-end",
        title: "Error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return null;
    }
  } catch (error) {
    if (error.response) {
      // toast.error(error.response.data.message);
    } else {
      // toast.error("An error occurred while fetching the template IDs.");
    }
    return null;
  }
}

