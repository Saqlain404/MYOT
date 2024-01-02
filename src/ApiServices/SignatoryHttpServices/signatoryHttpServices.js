import { toast } from "react-toastify";
import adminHttpService from "../adminHttpService";

export async function SignatoryProfileDetails(id) {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/signatory/profile-details/${id}`
    );

    if (!data?.error) return { data };

    throw data.error;
  } catch (error) {
    toast.error(
      error?.response?.data?.message
    );
    return { error };
  }
}

export async function SignatoryUpdateProfile(id, formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/signatory/update-profile/${id}`,
      formData
    );

    if (!data?.error) return { data };

    throw data.error;
  } catch (error) {
    toast.error(
      error?.response?.data?.message ||
        "An error occurred while fetching signatory profile details."
    );
    return { error };
  }
}

export async function SignatoryHomeCount() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/signatory/home-templete-count`
    );

    if (!data?.error) return { data };

    throw data.error;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return { error };
  }
}

export async function SignatoryTemplateData(id) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/signatory/templete-list/${id}`
    );

    if (!data?.error) return { data };

    throw data.error;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return { error };
  }
}

export async function SignatoryRequestsData() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/api/signatory/requests-list`
    );

    if (!data?.error) return { data };

    throw data.error;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return { error };
  }
}
