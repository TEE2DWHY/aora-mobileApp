export const handleChange = (formData, setFormData, name, value) => {
  setFormData({
    ...formData,
    [name]: value,
  });
};
