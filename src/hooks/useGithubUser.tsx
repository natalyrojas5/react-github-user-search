import { useState } from "react";
import { getUser } from "@/services";
import useForm from "@/hooks/useForm";

const useGithubUser = () => {
  const { values, handleInputChange } = useForm({ username: "" });

  const initialState = {
    user: {
      names: {
        username: "",
        name: "",
        createdAt: "",
      },
      bio: "",
      githubStatistics: {
        repos: 0,
        followers: 0,
        following: 0,
      },
      photo: "",
      socialNetworks: {
        github: "",
        twitter: "",
        location: "",
        company: "",
      },
    },
    loading: false,
    error: "",
  };
  const [state, setState] = useState(initialState);

  const formatJSON = (data: any) => {
    const {
      login,
      name,
      created_at,
      bio,
      location,
      public_repos,
      followers,
      following,
      avatar_url,
      html_url,
      twitter_username,
      company,
    } = data;
    return {
      names: {
        username: login,
        name,
        createdAt: new Date(created_at),
      },
      bio,
      githubStatistics: {
        repos: public_repos,
        followers,
        following,
      },
      photo: avatar_url,
      socialNetworks: {
        github: html_url,
        location,
        twitter: twitter_username,
        company,
      },
    };
  };

  const searchUser = async () => {
    const { username } = values;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      const responseJSON = await getUser(username);
      if (responseJSON.ok) {
        const user = await responseJSON.json();
        setState((prev: any) => ({
          ...prev,
          user: formatJSON(user),
        }));
      }
    } catch (error) {
      console.error(error);
      setState((prev) => ({
        ...prev,
        error: "An error occurred",
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };
  return { searchUser, handleInputChange, state };
};

export default useGithubUser;
