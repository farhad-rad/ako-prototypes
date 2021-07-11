Object.defineProperty(Object.prototype, 'toFormData', {
    /**
     * Creates An Instance Of FormData From Base Object 
     * @returns {FormData}
     */
    value: function () {
        const formData = new FormData();
        const binder = (data, parentKey) => {
            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
                Object.keys(data).forEach(key => {
                    binder(data[key], parentKey ? `${parentKey}[${key}]` : key);
                });
            } else {
                const value = data == null ? '' : (data instanceof Date ? data.toISOString() : data);
                formData.append(parentKey, value);
            }
        }
        binder(this);
        return formData;
    },
    enumerable: false
});