import jwtDecode from "jwt-decode";
import { JwtPayload } from "src/types";

const jwtKey = "jwt";

export function getJwtFromLocalStorage(): string | null {
  return localStorage.getItem(jwtKey);
}

export function saveJwtToLocalStorage(jwt: string): void {
  localStorage.setItem(jwtKey, jwt);
}

export function removeJwtFromLocalStorage(): void {
  localStorage.removeItem(jwtKey);
}

export function decodeJwt(jwt: string): JwtPayload {
  return jwtDecode<JwtPayload>(jwt);
}

export function isTokenExpired(exp: number): boolean {
  const currentTime = Date.now() / 1000;
  return exp < currentTime;
}
