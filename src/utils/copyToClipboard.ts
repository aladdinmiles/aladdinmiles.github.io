export default function copyToClipboard(
  stringToCopy: string,
  onCopy?: (copy: boolean) => void
) {
  if (typeof stringToCopy === 'string') {
    // Try using the Clipboard API first
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(stringToCopy)
        .then(() => {
          if (typeof onCopy === 'function') {
            onCopy(true);
            setTimeout(() => {
              onCopy(false);
            }, 2000);
          }
        })
        .catch((err) => {
          console.error('Failed to copy using Clipboard API: ', err);
          fallbackCopy(stringToCopy, onCopy);
        });
    } else {
      // Fallback to using a temporary textarea
      fallbackCopy(stringToCopy, onCopy);
    }
  } else {
    console.warn('Provide a valid string to copy');
  }
}

function fallbackCopy(text: string, onCopy?: (copy: boolean) => void) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    if (typeof onCopy === 'function') {
      onCopy(true);
      setTimeout(() => {
        onCopy(false);
      }, 2000);
    }
  } catch (err) {
    console.error('Fallback copy failed: ', err);
    if (typeof onCopy === 'function') {
      onCopy(false);
    }
  } finally {
    document.body.removeChild(textarea);
  }
}
