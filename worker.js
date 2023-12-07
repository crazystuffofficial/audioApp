self.onmessage = function (e) {
      const file = e.data.file;
      const index = e.data.index;

      const reader = new FileReader();

      reader.onload = function (e) {
        const rawData = e.target.result;
        const theBlob = new Blob([new Uint8Array(rawData)], { type: file.type });
        const object = [URL.createObjectURL(theBlob), index];

        self.postMessage(object);
      };

      reader.readAsArrayBuffer(file);
    };
