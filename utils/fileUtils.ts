export const blobToBase64 = (blob: globalThis.Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string)?.split(',')[1];
        if (base64) {
          resolve(base64);
        } else {
          reject(new Error("Failed to convert blob to base64."));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
};
