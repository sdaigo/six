import type { z } from "zod";

export type ErrorCode =
  | "NETWORK_ERROR"
  | "API_ERROR"
  | "UNKNOWN_ERROR"
  | "INPUT_VALIDATION_ERROR"
  | "MAP_ERROR";

export type ServerActionError = {
  code: ErrorCode;
  message?: string;
  issues?: z.ZodIssue[];
};

type Match<T, E> = <R>(onSuccess: (data: T) => R, onError: (error: E) => R) => R;

export type ActionResult<T, E = ServerActionError> =
  | { type: "success"; data: T; match: Match<T, never> }
  | { type: "error"; error: E; match: Match<never, E> };

export const isOk = <T, E>(
  result: ActionResult<T, E>,
): result is { type: "success"; data: T; match: Match<T, never> } => result.type === "success";

export const isErr = <T, E>(
  result: ActionResult<T, E>,
): result is { type: "error"; error: E; match: Match<never, E> } => result.type === "error";

export function ok<T, E>(data: T): ActionResult<T, E> {
  return {
    type: "success",
    data,
    match: (succ, _) => succ(data),
  };
}

export function err<T, E>(error: E): ActionResult<T, E> {
  return {
    type: "error",
    error,
    match: (_, err) => err(error),
  };
}
