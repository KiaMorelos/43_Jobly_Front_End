import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get all companies. */

  static async getAllCompanies(search) {
    let res = await this.request(`companies`, { name: search });
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all jobs. */

  static async getAllJobs(search) {
    let res = await this.request(`jobs`, { title: search });
    return res.jobs;
  }

  /** Login user and get token. */

  static async login(username, password) {
    let res = await this.request(`auth/token`, { username, password }, "post");
    return res.token;
  }

  /** sign up user and get token. */

  static async signup(formData) {
    let res = await this.request(`auth/register`, formData, "post");
    return res.token;
  }

  /** get the current user */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    console.log(res);
    return res.user;
  }

  /** update user info */

  static async updateUserInfo(username, formData) {
    let res = await this.request(`users/${username}`, formData, "patch");
    return res.user;
  }

  /** apply to job */

  static async applyToJob(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
  }
}

export default JoblyApi;
