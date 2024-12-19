export const getFileInfoFromUrl = async (
  url: string,
  type: string,
  name?: string
): Promise<File | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const fileName = name || url.substring(url.lastIndexOf('/') + 1);

    const blob = await response.blob();

    return new File([blob], fileName, { type: type });
  } catch (error) {
    console.error('There was a problem fetching file info:', error);
    return null;
  }
};
