import { api, type ApiOptions } from "./client";

type HttpOptions = Omit<ApiOptions, "method" | "body">;

export const http = {
    get: <T = unknown>(endpoint: string, options?: HttpOptions): Promise<T> =>
        api.get<T>(endpoint, options),

    post: <T = unknown>(
        endpoint: string,
        body: unknown,
        options?: HttpOptions
    ): Promise<T> =>
        api.post<T>(endpoint, body, options),

    put: <T = unknown>(
        endpoint: string,
        body: unknown,
        options?: HttpOptions
    ): Promise<T> =>
        api.put<T>(endpoint, body, options),

    patch: <T = unknown>(
        endpoint: string,
        body: unknown,
        options?: HttpOptions
    ): Promise<T> =>
        api.patch<T>(endpoint, body, options),

    delete: <T = unknown>(endpoint: string, options?: HttpOptions): Promise<T> =>
        api.delete<T>(endpoint, options),
};