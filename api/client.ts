
import { url } from "../config/URL";

export interface ApiOptions extends RequestInit {
    responseType?: "json" | "blob";
}

async function request<T>(
    endpoint: string,
    options: ApiOptions = {}
): Promise<T> {
    const { responseType = "json", ...fetchOptions } = options;

    const response = await fetch(`${url}${endpoint}`, {
        ...fetchOptions,
        headers: {
            ...(fetchOptions.body instanceof FormData
                ? {}
                : { "Content-Type": "application/json" }),
            ...fetchOptions.headers,
        },
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        const errorData = contentType?.includes("application/json")
            ? await response.json()
            : await response.text();

        throw new Error(
            typeof errorData === "string"
                ? errorData
                : errorData?.mensaje || `Error HTTP ${response.status}`
        );
    }

    if (response.status === 204) {
        return undefined as T;
    }

    if (responseType === "blob") {
        return await response.blob() as T;
    }

    return await response.json() as T;
}

export const api = {
    get: <T>(endpoint: string, options?: ApiOptions): Promise<T> =>
        request<T>(endpoint, { ...options, method: "GET" }),

    post: <T>(
        endpoint: string,
        body: unknown,
        options?: ApiOptions
    ): Promise<T> =>
        request<T>(endpoint, {
            ...options,
            method: "POST",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    put: <T>(
        endpoint: string,
        body: unknown,
        options?: ApiOptions
    ): Promise<T> =>
        request<T>(endpoint, {
            ...options,
            method: "PUT",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    patch: <T>(
        endpoint: string,
        body: unknown,
        options?: ApiOptions
    ): Promise<T> =>
        request<T>(endpoint, {
            ...options,
            method: "PATCH",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    delete: <T>(endpoint: string, options?: ApiOptions): Promise<T> =>
        request<T>(endpoint, { ...options, method: "DELETE" }),
};
