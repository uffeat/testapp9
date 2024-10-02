import { CONSTANTS } from "@/utils/constants";

export const server = new Proxy(
  {},
  {
    get: (_, name) => {
      return async (data = {}) => {
        const response = await fetch(`${CONSTANTS.APP_ORIGIN}/_/api/${name}`, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if ("__error__" in result) {
          throw new Error(result.__error__);
        }

        return result;
      };
    },
  }
);
