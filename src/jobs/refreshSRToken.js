export default async function handler({ container, data, pluginOptions }) {
  axios
    .post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email: options.email,
      password: options.password,
    })
    .then((res) => {
      options.shiprocketToken = res.data.token;
    })
    .catch((err) => {
      console.log("Shiprocket token refresh failed");
      throw err;
    });
}

export const config = {
  name: "refreshSRToken",
  schedule: "0 0 * * *",
  data: {},
};
