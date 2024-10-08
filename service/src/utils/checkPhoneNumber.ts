export const validatePhoneNumber = (value: string): boolean => {
  // 한국 전화번호 정규식
  const phoneNumberPattern = /^01[0-9]\d{8}$/;
  return phoneNumberPattern.test(value);
};
