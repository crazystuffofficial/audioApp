self.onmessage = function (e) {
      const file = e.data.file;
      const index = e.data.index;

      const reader = new FileReader();

      reader.onload = function (e) {
        const rawData = e.target.result;
        const theBlob = new Blob([new Uint8Array(rawData)], { type: file.type });
        const url = URL.createObjectURL(theBlob);

        self.postMessage(url);
      };

      reader.readAsArrayBuffer(file);
    };