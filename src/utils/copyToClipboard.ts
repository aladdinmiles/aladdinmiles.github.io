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
    const clipboardItem = new ClipboardItem({
      'text/plain': new Promise((resolve) => {
        // Ensure the string is properly resolved as a Blob
        const copyText = stringToCopy || '';
        resolve(new Blob([copyText], { type: 'text/plain' }));
      })
    });

    navigator.clipboard
      .write([clipboardItem])
      .then(() => {
        if (onCopy) {
          onCopy(true);
        }
      })
      .catch((err) => {
        console.error('Clipboard API copy failed: ', err);
        fallbackCopy(stringToCopy, onCopy);
      });
  } else {
    fallbackCopy(stringToCopy, onCopy);
  }
}

// Fallback for browsers without Clipboard API or when Clipboard API fails
function fallbackCopy(text: string, onCopy?: (success: boolean) => void) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand('copy');
    if (onCopy) {
      onCopy(successful);
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
