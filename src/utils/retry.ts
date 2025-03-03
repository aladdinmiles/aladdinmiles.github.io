const retry = async <T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delay: number = 1000
): Promise<T> => {
  let attempt = 0;

  while (attempt < attempts) {
    try {
      return await fn();
    } catch (error) {
      attempt++;
      if (attempt < attempts) {
        console.log(
          `Attempt ${attempt} failed. Retrying in ${delay / 1000} seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        await new Promise((resolve) => setTimeout(resolve, delay));
        console.error('All attempts failed:', error);
        throw error;
      }
    }
  }

  throw new Error('Unexpected exit from retry logic');
};

export default retry;
