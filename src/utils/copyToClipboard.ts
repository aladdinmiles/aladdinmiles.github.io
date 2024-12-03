export default function copyToClipboard(
  stringToCopy: string,
  onCopy?: (success: boolean) => void
) {
  if (typeof stringToCopy !== 'string') {
    console.warn('Provide a valid string to copy');
    return;
  }

  // Check for Clipboard API availability
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(stringToCopy)
      .then(() => {
        if (onCopy) {
          onCopy(true);
          setTimeout(() => {
            onCopy(false);
          }, 30000);
        }
      })
      .catch((err) => {
        console.error('Clipboard API copy failed: ', err);
        fallbackCopy(stringToCopy, onCopy); // Use fallback if Clipboard API fails
      });
  } else {
    fallbackCopy(stringToCopy, onCopy); // Use fallback if Clipboard API is unavailable
  }
}

function fallbackCopy(text: string, onCopy?: (success: boolean) => void) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed'; // Avoid scrolling to bottom
  textarea.style.opacity = '0'; // Make it invisible
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand('copy');
    if (onCopy) {
      onCopy(successful);
      setTimeout(() => {
        onCopy(false);
      }, 30000);
    }
    if (!successful) {
      console.warn('Copy command was not successful.');
    }
  } catch (err) {
    console.error('Fallback copy failed: ', err);
    if (onCopy) {
      onCopy(false);
    }
  } finally {
    document.body.removeChild(textarea);
  }
}
