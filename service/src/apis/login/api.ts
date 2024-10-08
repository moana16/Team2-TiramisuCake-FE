import { BASEURL, HEADERS } from '@/constants/lib/constants';
import {
  SendCodeRequestBody,
  ConfirmVerificationRequestBody,
  LoginRequestBody,
  CodeResponse,
  LoginResponse,
  ReIssueResponse,
  ConfirmResponse,
} from '@/types/Authorization/type';

export const sendAuthCode = async (
  phoneNumber: string
): Promise<CodeResponse> => {
  const requestBody: SendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${BASEURL}/verification/send`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(requestBody),
  });

  return response.json();
};

export const testAuthCode = async (
  phoneNumber: string
): Promise<CodeResponse> => {
  const requestBody: SendCodeRequestBody = {
    phoneNumber,
  };

  const response = await fetch(`${BASEURL}/verification/send/test`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(requestBody),
  });

  return response.json();
};

export const confirmVerification = async (
  body: ConfirmVerificationRequestBody
): Promise<ConfirmResponse> => {
  const response = await fetch(`${BASEURL}/verification/confirm`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });

  return response.json();
};

export const login = async (
  body: LoginRequestBody,
  shareCode?: string
): Promise<LoginResponse> => {
  const headers = { ...HEADERS } as { [key: string]: string };

  if (shareCode) {
    headers['X-Share-Code'] = shareCode;
  }

  const response = await fetch(`${BASEURL}/login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });

  return response.json();
};

export const reissueToken = async (
  accessToken: string,
  refreshToken: string
): Promise<ReIssueResponse> => {
  const response = await fetch(`${BASEURL}/reissue`, {
    method: 'GET',
    headers: {
      ...HEADERS,
      Authorization: accessToken,
      'Authorization-Refresh': refreshToken,
    },
  });

  return response.json();
};
