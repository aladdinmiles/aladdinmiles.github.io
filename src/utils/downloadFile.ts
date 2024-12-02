type DownloadFileProps = {
  data: string;
  fileName: string;
  onSuccess?: () => void;
  onError?: (message: string) => void;
};

export const downloadFileFromUrl = ({
  data,
  fileName,
  onSuccess = () => {},
  onError = () => {}
}: DownloadFileProps): void => {
  try {
    // Fetch the file from the URL
    fetch(data)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Clean up the URL object

        onSuccess();
      })
      .catch(() => {
        onError('An error occurred while trying to download.');
      });
  } catch (e) {
    onError('An error occurred while trying to download.');
  }
};

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
