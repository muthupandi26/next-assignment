import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Modal } from "./modal";
import CommonSelect from "./CommonSelect";
import CommonTextField from "./CommonTextField";
import { post } from "../api/apiservice";
import LoaderModal from "./loader/LoaderModal";

interface IControlPanel {
  open: boolean;
  handleClose: (refresh: boolean) => void;
}

const ControlPanel = (props: IControlPanel) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await post({
      url: "https://fakestoreapi.com/products",
      data: formData,
    });
    if (response.id) {
      setLoading(false);
      props.handleClose(true);
    } else {
      setLoading(false);
      alert("product not created");
    }
    console.log(response, "heyResponse");
  };

  return (
    <Box>
      <Modal open={props.open} handleClose={() => props.handleClose(false)}>
        <Typography variant="h5">Start a New Scan</Typography>
        <Box
          margin={"24px 0px"}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <CommonTextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <CommonTextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <CommonSelect
            label="Category"
            name="category"
            options={[
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
            value={formData.category}
            onChange={handleChange}
          />

          <CommonTextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        {loading && (
          <LoaderModal open={loading} message={"Creating New product"} />
        )}
      </Modal>
    </Box>
  );
};

export default ControlPanel;
