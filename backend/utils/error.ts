export const createError = (statusCode: number, message: string) => {
  return {
    success: false,
    statusCode,
    message,
  }
}

