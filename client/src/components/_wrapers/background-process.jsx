import { useCallback, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

import TokenStore from "helpers/token-store";

import { postRefreshToken } from "services/rest-api/auth";
import { useUserContext } from "store/context/user";

export default function BackgroundProcess() {
  const intervalRef = useRef(null);
  const { setLogout } = useUserContext();

  const { mutate } = useMutation({
    mutationFn: postRefreshToken,
    onSuccess: (data) => {
      const tokenStore = new TokenStore("access");
      const { accessToken } = data || {};
      tokenStore.setToken(accessToken);
    },
    onError: () => {
      toast.info("Access token can not updated!!");
      setLogout();
    },
    retry: 5,
    retryDelay: 60 * 1000,
  });

  const fetchToken = useCallback(() => {
    const tokenStore = new TokenStore("refresh");
    const refreshToken = tokenStore.getToken();
    if (refreshToken) {
      mutate({ refreshToken: tokenStore.getToken() });
    }
  }, [mutate]);

  useEffect(() => {
    const startInterval = () => {
      fetchToken(); // Initial token fetch on worker start
      intervalRef.current = setInterval(fetchToken, 9 * 60 * 1000); // Set interval for every 9 minutes
    };
    startInterval();

    return () => {
      clearInterval(intervalRef.current); // Clear interval on cleanup
    };
  }, [fetchToken]); // Re-run on changes to dependencies

  return <div></div>;
}
