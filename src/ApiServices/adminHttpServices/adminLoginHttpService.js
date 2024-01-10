import adminHttpService from "../adminHttpService";
import { toast } from "react-toastify";
import mainAdminHttpService from "../mainAdminHttpService";

export async function adminLogin(formData) {
  try {
    const { data, headers } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/login`,
      formData
    );

    // console.log("login Data", data);
    if (!data?.error) {
      localStorage.setItem("myot_admin_id", data?.results?.employee?._id);
      await localStorage.removeItem("token-company");
      await localStorage.setItem(
        "token-company",
        headers["x-auth-token-company"]
      );
      await localStorage.setItem("user_id", data?.results?.employee?._id);

      return { data };
    } else toast.error(data.message);

  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function forgotPassword(formData) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/forgotPassword`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-admin");
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function verifyOTP(formData) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/verifyOTP`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function UpdateNewPassword(formData) {
  try {
    const { data } = await adminHttpService.put(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/updatePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function updatePassword(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/updatePassword`,
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
export async function getDashboardCount() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getDashboardCount`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function getNotificationList() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getNotificationList`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function changePassword(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/changePassword`,
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

export async function updateProfile(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/updateProfile`,
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
const masteHook = async (url, formData) => {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/${url}`,
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
};

export async function getAdminData() {
  try {
    const { data } = await adminHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/getAdminData`
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function contactUs(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/admin/contactUs`,
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

export async function adminSignUp(formData) {
  try {
    const { data } = await adminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/company/signup  `,
      formData
    );

    if (!data?.error) {
      return { data };
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function mainAdminLogin(formData) {
  try {
    const { data, headers } = await mainAdminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/admin/login`,

      formData
    );

    console.log("login Data", data);
    if (!data.error) {
      await localStorage.removeItem("token-main-admin");
      await localStorage.setItem(
        "token-main-admin",
        headers["x-auth-token-admin"]
      );

      return { data };
    } else toast.error(data.message);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}

export async function mainForgotPassword(formData) {
  try {
    const { data } = await mainAdminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/admin/forgotPassword`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("token-main-admin");
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function mainVerifyOTP(formData) {
  try {
    const { data } = await mainAdminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/admin/verifyOTP`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
export async function mainUpdateNewPassword(formData) {
  try {
    const { data } = await mainAdminHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}/api/admin/updatePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      toast.success(data.message);
    } else toast.error(data.message);

    if (!data.error) return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data.message);
    return { error };
  }
}
